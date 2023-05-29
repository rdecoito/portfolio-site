import { useEffect, useRef } from 'react';

export const useThemeMode = (callback: (mode: 'light' | 'dark') => void) => {
    const fn = useRef(callback);
    fn.current = callback;

    useEffect(() => {
        const mediaMatcher = window.matchMedia('(prefers-color-scheme: light)');
        const watcher = (e: MediaQueryListEvent) => {
            fn.current(e.matches ? 'light' : 'dark');
        };

        fn.current(mediaMatcher.matches ? 'light' : 'dark');

        mediaMatcher.addEventListener('change', watcher);
        return () => mediaMatcher.removeEventListener('change', watcher);
    }, []);
};
