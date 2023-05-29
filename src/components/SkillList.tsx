import styled from 'styled-components';
import { Badge } from './Badge';
import { Card } from '.';

const BadgeFlex = styled.div(({ theme }) => ({
    display: 'flex',
    flexFlow: 'row wrap',
    marginTop: theme.padding(2),
    gap: theme.gap(1)
}));


function BadgeList(props: { color?: string; text?: 'white' | 'black'; names: string[]; }) {
    const { color, text, names } = props;
    return (
        <BadgeFlex>
            {names.map((name) => (
                <Badge
                    key={name}
                    color={color}
                    text={text}
                >
                    {name}
                </Badge>
            ))}
        </BadgeFlex>
    );
}

interface SkillListProps {
    title: string;
    color: string;
    text?: 'white' | 'black';
    skills: string[];
}

export function SkillList(props: SkillListProps) {
    const { title, color, text, skills } = props;
    return (
        <Card>
            {title}
            <BadgeList
                color={color}
                text={text}
                names={skills}
            />
        </Card>
    );
}
