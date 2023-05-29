import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { InlineLogo } from '../components';
import { PropsWithChildren } from 'react';

const NavBar = styled.nav(({ theme }) => ({
    width: '100vw',
    backgroundColor: theme.color('--navbar-color'),
    display: 'flex',
    position: 'fixed',
    top: 0,
    zIndex: theme.zIndex.navbar,
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.gap(2),
    padding: theme.padding(1.5)
}));

const HomeLink = styled.a(({ theme }) => ({
    color: theme.color('--text-color'),
    backgroundColor: theme.color('--background-color'),
    borderRadius: theme.gap(2),
    padding: `${theme.padding(2)} ${theme.padding(4)}`,
    '&:hover': {
        color: theme.color('--text-color')
    }
}));

const ContentArea = styled.div({
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center'
});

export default function NavBarLayout({ children }: PropsWithChildren) {
    return (
        <>
            <NavBar>
                <HomeLink href='/#intro'>
                    <InlineLogo margin='right'/>
                    Landon
                </HomeLink>
                <a href='/#about-me'>About Me</a>
                <a href='/#experience'>Experience</a>
                <a href='/#projects'>Projects</a>
            </NavBar>
            <ContentArea>
                {children ? children : <Outlet />}
            </ContentArea>
        </>
    );
}
