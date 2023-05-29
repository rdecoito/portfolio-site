import 'styled-components';

declare module 'styled-components' {
    export type ThemeColorVarName =
        | '--background-color'
        | '--text-color'
        | '--link-text-color'
        | '--link-hover-color'
        | '--button-background-color'
        | '--default-badge-color'
        | '--shadow-color'
        | '--navbar-color'
        | '--breadcrumb-color'
        | '--card-background'
    ;

    export type ThemeVarName =
        | ThemeColorVarName
    ;

    export interface DefaultTheme {
        mode: 'light' | 'dark';
        logoSource: string;
        gap: (multiple: number) => string;
        padding: (multiple: number) => string;
        color: (name: ThemeColorVarName ) => string;
        getColor: (nameOrColor: string) => string;
        zIndex: {
            navbar: number;
        }
    }
}
