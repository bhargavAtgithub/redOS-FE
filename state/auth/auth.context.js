import { createContext, useEffect, useState } from 'react';

const defaultState = {
    user: {},
    signIn: () => undefined,
    signOut: () => undefined,
    userType: null,
};

const AuthContext = createContext(defaultState);

import { supabase } from '../../config/supabaseClient';

const PROVIDERS = {
    EMAIL: '',
    GITHUB: 'github',
    GOOGLE: 'google',
    TWITTER: 'twitters',
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(defaultState.user);

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange(
            async () => checkUser()
        );
        checkUser();

        return () => {
            authListener?.unsubscribe();
        };
    }, []);

    const checkUser = async () => {
        try {
            const user = supabase.auth.user();
            console.log('User', user);
            setUser(user);
        } catch (error) {
            // TODO: Add Error Management
        }
    };

    const signUp = async (email, password) => {
        try {
            const { user, session, error } = await supabase.auth.signUp({
                email,
                password,
            });

            console.log(user, session);
            console.log(error);
            if (error) {
                throw error;
            }
        } catch (error) {
            // TODO: Add Error Management
        }
    };

    const signIn = async (provider, email, password) => {
        try {
            const { user, session, error } = await supabase.auth.signIn({
                email,
                password,
                provider,
            });

            console.log('user', user);
            console.log('session', session);
            console.log('error', error);

            if (error) {
                throw error;
            }
        } catch (error) {
            // TODO: Add Error Management
        }
    };

    const signOut = async () => {
        try {
            const { error } = await supabase.auth.signOut();

            throw error;
        } catch (error) {
            // TODO: Add Error Management
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                signUp,
                signIn,
                signOut,
                PROVIDERS,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
