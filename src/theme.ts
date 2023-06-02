import { DefaultTheme, ThemeVarName } from 'styled-components';
import { DARK_MODE_LOGO_SRC, LIGHT_MODE_LOGO_SRC } from './constants';
import { Dispatch, SetStateAction } from 'react';

const darkModeVars: Record<ThemeVarName, string> = {
    '--background-color': '#152028',
    '--text-color': 'rgba(255, 255, 255, 0.87)',
    '--link-text-color': '#a5c3ff',
    '--link-hover-color': '#aebfce',
    '--button-background-color': '#1a1a1a',
    '--navbar-background-color': '#172e33',
    '--navbar-text-color': 'var(--text-color)',
    '--default-badge-color': 'seagreen',
    '--shadow-color': 'rgba(0, 0, 0, 0.5)',
    '--breadcrumb-color': '#172e33',
    '--card-background': 'rgba(150, 150, 150, 0.07)',
};

const lightModeVars: Record<ThemeVarName, string> = {
    '--background-color': '#eee',
    '--text-color': '#213547',
    '--link-text-color': '#646cff',
    '--link-hover-color': '#747bff',
    '--button-background-color': '#1a1a1a',
    '--navbar-background-color': '#222',
    '--navbar-text-color': 'white',
    '--default-badge-color': 'lightblue',
    '--shadow-color': 'rgba(0, 0, 0, 0.5)',
    '--breadcrumb-color': '#222',
    '--card-background': 'rgba(0, 0, 0, 0.07)',
};

export const defaultTheme = {
    mode: 'dark',
    logoSource: DARK_MODE_LOGO_SRC,
    gap: (multiple) => `${multiple * 8}px`,
    padding: (multiple) => `${multiple * 0.2}em`,
    color: (name) => `var(${name})`,
    getColor: (clr) => clr.startsWith('--') ? `var(${clr})` : clr,
    zIndex: {
        navbar: 1000
    }
} as DefaultTheme;

export const assignTheme = (mode: 'light' | 'dark', setTheme: Dispatch<SetStateAction<DefaultTheme>>) => {
    setTheme((oldTheme) => ({
        ...oldTheme,
        mode,
        logoSource: mode === 'dark' ? DARK_MODE_LOGO_SRC : LIGHT_MODE_LOGO_SRC
    }));
    Object.entries(mode ==='dark' ? darkModeVars : lightModeVars).map((varEntry) => {
        (document.querySelector(':root')! as HTMLElement).style.setProperty(...varEntry);
    });
};
