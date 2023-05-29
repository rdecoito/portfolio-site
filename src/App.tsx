import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { defaultTheme, assignTheme } from './theme';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Intro from './pages/Intro';
import PageNotFound from './pages/PageNotFound';
import NavBarLayout from './pages/NavBarLayout';
import { CenteredPage } from './components';
import { useThemeMode } from './hooks';
import { useState } from 'react';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <NavBarLayout>
                <CenteredPage centerText>
                    <Intro />
                    <AboutMe />
                    <Experience />
                    <Projects />
                </CenteredPage>
            </NavBarLayout>
        ),
        errorElement: <NavBarLayout><PageNotFound /></NavBarLayout>
    }
]);

export default function App() {
    const [theme, setTheme] = useState(defaultTheme);
    useThemeMode((mode) => assignTheme(mode, setTheme));

    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}
