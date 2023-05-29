import styled from 'styled-components';

export const Card = styled.div(({ theme }) => ({
    backgroundColor: theme.color('--card-background'),
    boxShadow: `0 0 ${theme.gap(1)} ${theme.color('--shadow-color')}`,
    borderRadius: theme.gap(1),
    padding: theme.padding(3)
}));
