import styled from 'styled-components';

export const CenteredPage = styled.div<{ centerText?: boolean }>(({ theme, centerText }) => ({
    height: '100%',
    margin: 'auto',
    maxWidth: 1200,
    padding: `0 ${theme.gap(1)} ${theme.gap(1)}`,
    overflow: 'auto',
    textAlign: centerText ? 'center' : undefined
}));
