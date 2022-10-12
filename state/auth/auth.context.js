import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';
import { useToast } from '../../components/app';

const defaultState = {
    user: {},
    signIn: () => undefined,
    signOut: () => undefined,
    signUp: () => undefined,
    userType: null,
};

const AuthContext = createContext(defaultState);

import { supabase } from '../../config/supabaseClient';

const PROVIDERS = {
    EMAIL: '',
    GITHUB: 'github',
    GOOGLE: 'google',
    TWITTER: 'twitter',
};

export const AuthProvider = ({ children }) => {
    const router = useRouter();
    const toast = useToast();
    const [loading, setLoading] = useState(true);
    const [signing, setSigning] = useState(false);
    const [session, setSession] = useState(true);
    const [user, setUser] = useState(defaultState.user);

    useEffect(() => {
        setLoading(true);
        const { data: authListener } = supabase.auth.onAuthStateChange(
            async () => await getProfile()
        );
        getProfile();

        return () => {
            authListener?.unsubscribe();
        };
    }, []);

    useEffect(() => {
        if (Object.keys(user).length) {
            setLoading(false);
        }
    }, [user]);

    const getProfile = async (next = () => {}) => {
        try {
            const user = await getCurrentUser();

            if (user) {
                let { data, error, status } = await supabase
                    .from('profiles')
                    .select()
                    .eq('user_id', user.id)
                    .limit(1);

                next();
                if (error && status !== 406) {
                    throw error;
                }

                if (data && data.length) {
                    setUser({
                        ...data[0],
                        email: user.email,
                        avatar_url: data[0]?.avatar_url
                            ? data[0]?.avatar_url + `?t=${data[0]?.updated_at}`
                            : '',
                    });
                } else {
                    setUser({
                        email: user.email,
                    });
                }
                setSession(true);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getCurrentUser = async () => {
        try {
            const session = supabase.auth.session();
            if (!session?.user) {
                setLoading(false);
                setSession(false);
                return null;
            }
            return session.user;
        } catch (error) {
            console.log(error);
        }
    };

    const updateProfile = async (userDetails) => {
        try {
            const user = await getCurrentUser();
            if (user) {
                delete userDetails.confirm_password;
                delete userDetails.password;
                delete userDetails.email;

                const updates = {
                    user_id: user.id,
                    ...userDetails,
                    updated_at: new Date(),
                };

                let { error } = await supabase.from('profiles').upsert(updates);
                if (error) {
                    throw error;
                } else {
                    getProfile();
                    toast({
                        message: 'Profile Updated',
                    });
                }
            }
        } catch (error) {
            return {
                error,
            };
        }
    };

    const signUp = async ({ email, password, ...userDetails }) => {
        try {
            setSigning(true);
            const { user, session, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                throw error;
            }

            let current_user = {
                user_id: user.id,
                email: user.email,
            };

            setUser(current_user);
            getProfile((data) => {
                if (data == null) {
                    router.push(`/profile`);
                }
            });
        } catch (error) {
            console.log(error);
            setSigning(false);
            if (error.message) {
                toast({
                    message: error.message,
                });
            } else {
                return {
                    error: error,
                };
            }
        }
    };

    const signIn = async (provider, email, password) => {
        try {
            setSigning(true);
            let signInObj = {};
            if (provider === PROVIDERS.GITHUB) {
                signInObj = {
                    provider: PROVIDERS.GITHUB,
                };
            } else if (provider === PROVIDERS.GOOGLE) {
                signInObj = {
                    provider: PROVIDERS.GOOGLE,
                };
            } else if (provider === PROVIDERS.TWITTER) {
                signInObj = {
                    provider: PROVIDERS.TWITTER,
                };
            } else {
                signInObj = {
                    email: email,
                    password: password,
                };
            }
            const { user, session, error } = await supabase.auth.signIn(
                signInObj
            );

            if (error) {
                throw error;
            }

            getProfile((data) => {
                setSigning(false);
                if (data == null) {
                    router.push(`/profile`);
                }
            });
        } catch (error) {
            console.log(error);
            setSigning(false);
            if (error.status == 400) {
                toast({
                    message: error.message,
                });
            } else {
                return {
                    error: error,
                };
            }
        }
    };

    const signOut = async () => {
        try {
            const { error } = await supabase.auth.signOut();

            if (error) {
                throw error;
            }

            setUser({});
            setSession(false);
        } catch (error) {
            console.log(error);
            return {
                error: error,
            };
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                session,
                signUp,
                signIn,
                signOut,
                updateProfile,
                getProfile,
                PROVIDERS,
                loading,
                signing,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
