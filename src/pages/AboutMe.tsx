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
                Hello! My name is Landon, and I&apos;m a full stack software developer
                with a lot of experience collaborating at a high level, architecting
                solutions for interesting problems, writing maintainable and extensible
                code, and supporting software through documentation and issue tracking.
            </p>
            <p>
                I currently live in Northern Virginia with my wife and our two cats,
                but I will be traveling to Vancouver, Canada soon to follow my wife&apos;s
                work transfer. I am looking for remote opportunities in software
                development, especially full stack or frontend web development.
            </p>
            <p>
                In my handful of years of experience in professional software development,
                I have taken on a wide range of responsibility ranging from mentoring
                summer interns to taking ownership of an entire project&apos;s frontend. I
                have provided meaningful input on a variety of our project&apos;s technical
                solutions ranging from the design of extensible architecture to the
                {'>'}85% increased optimization of costly microservice operations to the
                writing of technical documentation for both developer onboarding and
                new feature spikes.
            </p>
            <p>
                On the less professional side, some of my hobbies include hiking, playing
                board games and TTRPGs, and programming! I have more Steam games than I
                can play (though who doesn&apos;t), and I love bouncing between personal
                projects when I get the opportunity.
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
        </>
    );
}
