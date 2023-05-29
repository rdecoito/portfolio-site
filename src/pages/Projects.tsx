import styled from 'styled-components';
import { Card, InlineLogo } from '../components';

const ProjectImage = styled.img({
    height: '4em',
    width: '4em'
});

const PortfolioProjectLogo = ProjectImage.withComponent(InlineLogo);

const ProjectList = styled.div(({ theme }) => ({
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.gap(1)
}));

const ProjectCard = styled(Card)({
    maxWidth: 500
});

export default function Projects() {
    return (
        <>
            <h1 id='projects'>
                <InlineLogo margin='right' />
                Projects
                <InlineLogo margin='left' hideWhenScreenSmall />
            </h1>
            <ProjectList>
                <ProjectCard>
                    <PortfolioProjectLogo ariaShow />
                    <h3>Portfolio Website</h3>
                    <p>
                        The website you&apos;re looking at! I threw this together over a couple days
                        using React, and I had a good bit of fun with it.
                    </p>
                    <p>
                        React is admittedly not
                        the most appropriate choice for what is essentially a static website, but
                        I wanted to demonstrate some basic ability with a well-scaffolded small project
                        utilizing TypeScript, Vite, and ESLint.
                    </p>
                    <a href=''>Check out the code here!</a>
                </ProjectCard>
                <ProjectCard>
                    <ProjectImage
                        src='check_your_balance_logo.png'
                        alt='An intricate balance scale set upon a background which is black on the left half and white on the right half.'
                    />
                    <h3>Check Your Balance</h3>
                    <p>
                        This was a passion project that serves as a quick and easy way to track Player
                        Characters and Non-Player Characters in the tabletop roleplaying game
                        {' '}
                        <a href='https://magpiegames.com/pages/avatar-legends'>Avatar Legends</a>,
                        by Magpie Games. I used it myself for some of my games and was pleased with
                        the results
                    </p>
                    <p>
                        The unstated goal of the project was to get some experience
                        using a new framework called <a href='https://kit.svelte.dev/'>SvelteKit</a>,
                        which uses <a href='https://svelte.dev/'>Svelte</a> to make performant and
                        reactive web applications.
                    </p>
                    <p>You can find the live site at <a href='https://ttrpgtools.app'>ttrpgtools.app</a>.</p>
                    <a href='https://github.com/rdecoito/avatar-tools-sveltekit'>Check out the code here!</a>
                </ProjectCard>
            </ProjectList>
        </>
    );
}
