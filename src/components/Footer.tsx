import styled from 'styled-components';

const FooterBackground = styled.div(({ theme }) => ({
    padding: theme.padding(4),
    marginTop: '20vh',
    textAlign: 'center',
    backgroundColor: theme.color('--navbar-background-color'),
    color: theme.color('--navbar-color')
}));

const MastodonLogo = styled.img(({ theme }) => ({
    height: '2em',
    width: '2em',
    margin: theme.padding(2),
}));

export const Footer = () => {
    return (
        <FooterBackground>
            &copy; 2023 Landon DeCoito
            <br />
            <a href='https://mastodon.social/@LandoDev' rel='me'>
                <MastodonLogo src='logo_purple.svg' />
            </a>
        </FooterBackground>
    );
};
