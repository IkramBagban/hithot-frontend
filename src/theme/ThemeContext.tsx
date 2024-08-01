import React, { createContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { lightThemeColors, darkThemeColors } from './ThemeColors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../config';

export const ThemeContext = createContext({
    isDark: false,
    colors: darkThemeColors,
    setScheme: (scheme: 'light' | 'dark') => {},
    toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: any) => {
    const [isDark, setIsDark] = useState(false); // toggle here for default theme
    const scheme = useColorScheme();

    // const [isDark, setIsDark] = useState(scheme === 'dark');

    // useEffect(() => {
    //     setIsDark(scheme === 'dark');
    // }, [scheme]);
    useEffect(() => {
        const savedTheme = async () => {
            const theme = await AsyncStorage.getItem(StorageKey.$THEME);
            if (theme) {
                setIsDark(theme === 'dark');
            }
        };
        savedTheme();
    }, []);
    const defaultTheme = {
        isDark,
        colors: isDark ? darkThemeColors : lightThemeColors,
        setScheme: (scheme: 'light' | 'dark') => {
            setIsDark(scheme === 'dark');
        },
        toggleTheme: () => {
            setIsDark(!isDark);
        },
    };
    return (
        <ThemeContext.Provider value={defaultTheme}>
            {children}
        </ThemeContext.Provider>
    );
};
