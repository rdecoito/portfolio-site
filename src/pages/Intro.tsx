import styled, { keyframes } from 'styled-components';

const fadeInKeyframe = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

const bounceKeyframe = keyframes`
    0% { transform: translate(-50%, 0px); }
    10% { transform: translate(-50%, -10px); }
    16% { transform: translate(-50%, 0px); }
    100% { transform: translate(-50%, 0px); }
`;

const IntroBackground = styled.div`
    display: table-cell;
    height: 100vh;
    width: 100vw;
    vertical-align: middle;
    opacity: 0;
    animation: 2s 0.25s forwards ${fadeInKeyframe};
    >h3, >p {
        opacity: 0;
        animation: 2s 0.75s forwards ${fadeInKeyframe};
    }
    >svg {
        opacity: 0;
        animation: 1s 3s forwards ${fadeInKeyframe}, 3.5s 3.25s infinite ${bounceKeyframe};
    }
`;

const DownArrowSvg = styled.svg`
    display: block;
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translateX(-50%);
    width: 75px;
    height; 75px;
    border: 1px solid grey;
    border-radius: 20px;
`;

export default function Intro() {
    return (
        <IntroBackground id='intro'>
            <h1>Landon DeCoito</h1>
            <h2>Full-Stack Web Developer</h2>
            <p>He/Him</p>
            <DownArrowSvg
                viewBox='0 0 100 100'
                aria-hidden
            >
                <path
                    strokeWidth='10'
                    strokeLinejoin='round'
                    stroke='currentColor'
                    fill='none'
                    d='M 25 37.5 l 25 25 l 25 -25'
                />
            </DownArrowSvg>
        </IntroBackground>
    );
}
