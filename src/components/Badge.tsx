import styled from 'styled-components';

export const Badge = styled.span<{ color?: string }>(({ color, theme }) => ({
    display: 'block',
    borderRadius: '0.5em',
    padding: `${theme.padding(0.75)} ${theme.padding(3)}`,
    backgroundColor: color ? theme.getColor(color) : theme.color('--default-badge-color')
}));
