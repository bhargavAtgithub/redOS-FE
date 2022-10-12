import axios from 'axios';
import React, { createContext } from 'react';
import { useToast } from '../../components/app';

export const defaultState = {};

export const AppContext = createContext(defaultState);

export const AppProvider = ({ children }) => {
    const toast = useToast();

    const hello = async ({ method = 'GET', url, data = {} }) => {
        try {
            const config = {};
            config.method = method;
            config.url = url;
            config.headers = {};

            if (method !== 'GET' && method !== 'DELETE') {
                config.data = data;
            }

            const response = await axios(config);

            if (response.status == 200) {
                return response.data;
            }
        } catch (error) {
            console.log(error);
            toast({
                message: 'Something went wrong. Please retry',
            });
            return error;
        }
    };

    return (
        <AppContext.Provider value={{ hello }}>{children}</AppContext.Provider>
    );
};
