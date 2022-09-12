import React, { Fragment, useState } from "react";
import GlobalStyles from "../themeEngine/global";
import Cursor from "../tokens/cursor";
import themeBox from "../themeEngine";
import CursorProvider from "../tokens/cursor/cursor.provider";
import BaseLayout from "../layout";

import { ThemeProvider } from "styled-components";

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
            <CursorProvider>
                <Cursor />
                <BaseLayout>
                    <GlobalStyles />
                    <Component {...pageProps} />
                </BaseLayout>
            </CursorProvider>
        </ThemeProvider>
    );
}

export default MyApp;
