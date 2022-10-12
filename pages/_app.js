import React, { useState } from 'react';
import ToastProvider from '../components/app/toast/toast.context';
import BaseLayout from '../layout';
import themeBox from '../themeEngine';
import GlobalStyles from '../themeEngine/global';
import Cursor from '../tokens/cursor';
import CursorProvider from '../tokens/cursor/cursor.provider';

import { ThemeProvider } from 'styled-components';
import { AppProvider } from '../state/app/app.context';
import { AuthProvider } from '../state/auth/auth.context';

function MyApp({ Component, pageProps }) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <ThemeProvider
            theme={{
                colors: darkMode ? themeBox.dark_theme : themeBox.light_theme,
                darkMode: darkMode,
                toggleTheme: toggleTheme,
                ...themeBox,
            }}
        >
            <ToastProvider>
                <GlobalStyles />
                <CursorProvider>
                    <Cursor />
                    <AuthProvider>
                        <AppProvider>
                            <BaseLayout>
                                <Component {...pageProps} />
                            </BaseLayout>
                        </AppProvider>
                    </AuthProvider>
                </CursorProvider>
            </ToastProvider>
        </ThemeProvider>
    );
}

export default MyApp;
