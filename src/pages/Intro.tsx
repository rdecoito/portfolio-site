import styled from 'styled-components';

const IntroBackground = styled.div(() => ({
    display: 'table-cell',
    height: '100vh',
    width: '100vw',
    verticalAlign: 'middle'
}));

export default function Intro() {
    return (
        <IntroBackground id='intro'>
            <h1>Landon DeCoito</h1>
            <h3>Full-Stack Web Developer</h3>
            <p>He/Him</p>
        </IntroBackground>
    );
}
