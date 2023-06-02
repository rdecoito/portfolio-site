import styled from 'styled-components';

const FooterBackground = styled.div(({ theme }) => ({
    padding: theme.padding(4),
    marginTop: '20vh',
    textAlign: 'center',
    backgroundColor: theme.color('--navbar-background-color'),
    color: theme.color('--navbar-text-color')
}));

const MastodonLogo = styled.img(({ theme }) => ({
    height: '2em',
    width: '2em',
    margin: theme.padding(2),
}));

const HiddenSpan = styled.span({
    position: 'absolute',
    opacity: 0,
    fontSize: 0,
});

export const Footer = () => {
    return (
        <FooterBackground>
            &copy; 2023 Landon DeCoito
            <br />
            <a href='https://mastodon.social/@LandoDev' rel='me'>
                <MastodonLogo src='mastodon_logo_purple.svg' alt='The Mastodon logo' />
                <HiddenSpan>Mastodon</HiddenSpan>
            </a>
        </FooterBackground>
    );
};
