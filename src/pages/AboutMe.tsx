import styled from 'styled-components';
import { InlineLogo } from '../components';

const HorizontalImg = styled.img<{ gridArea?: string }>(({ gridArea }) => ({
    display: 'block',
    width: 200,
    gridArea
}));

const VerticalImg = styled.img<{ gridArea?: string }>(({ gridArea }) => ({
    display: 'block',
    width: 200,
    gridArea
}));

const ImageGrid = styled.div(({ theme }) => ({
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    gap: theme.gap(2)
}));

export default function AboutMe() {
    return (
        <>
            <h1 id='about-me'>
                <InlineLogo margin='right' />
                About Me
                <InlineLogo margin='left' hideWhenScreenSmall />
            </h1>
            <p>
                Hello! My name is Landon, and I&apos;m a software developer. I currently
                live in northern Virginia with my wife and our two cats, but soon
                we&apos;ll be moving to Vancouver, BC.
            </p>
            <ImageGrid>
                <HorizontalImg
                    gridArea='proposal'
                    src='/proposal_horizontal_small.jpg'
                    alt='Me and my wife sitting on a tree branch embracing each other'
                />
                <VerticalImg
                    gridArea='sevyn'
                    src='/sevyn_sleeping_small.png'
                    alt="One of our cats, Sevyn, sleeping on a pillow"
                />
                <VerticalImg
                    gridArea='onyx'
                    src='/onyx_mlem_small.png'
                    alt='One of our cats, Onyx, sitting on her cat bed with her tongue sticking out'
                />
            </ImageGrid>
            <p>
                Some of my hobbies include hiking, playing board games and TTRPGs, and programming!
            </p>
        </>
    );
}
