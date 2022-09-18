import { createContext, useState } from 'react';

const defaultState = {
    authenticated: false,
    signIn: () => undefined,
    signOut: () => undefined,
    userType: null,
};

const AuthContext = createContext(defaultState);

import { supabase } from '../../config/auth/supabaseClient';

const PROVIDERS = {
    EMAIL: '',
    GITHUB: 'github',
    GOOGLE: 'google',
    TWITTER: 'twitters',
};

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(
        defaultState.authenticated
    );

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
                authenticated,
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
