import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Card } from './Card';

const PositionCard = styled(Card)({
    flex: '1 1 700px'
});

const PositionName = styled.span(({ theme }) => ({
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    gap: theme.gap(1),
}));

interface JobPositionProps extends PropsWithChildren {
    title: string;
    dates: string;
}

export function JobPosition(props: JobPositionProps) {
    const { title, dates, children } = props;
    return (
        <PositionCard>
            <PositionName>
                <span>{title}</span>
                <span>{dates}</span>
            </PositionName>
            {children}
        </PositionCard>
    );
}
