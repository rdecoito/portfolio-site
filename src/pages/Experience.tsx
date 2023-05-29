import styled from 'styled-components';
import { InlineLogo, JobPosition, SkillList } from '../components';

const JobFlex = styled.div(({ theme }) => ({
    display: 'flex',
    flexFlow: 'row wrap',
    textAlign: 'left',
    gap: theme.gap(1)
}));

const SkillListColumn = styled.div(({ theme }) => ({
    display: 'flex',
    flexFlow: 'column nowrap',
    flex: '1 1 300px',
    gap: theme.gap(1)
}));

const Breadbox = styled.div(({ theme }) => ({
    display: 'flex',
    flexFlow: 'column nowrap',
    gap: theme.gap(1),
    alignItems: 'center',
    flex: '0 0 100%'
}));

const Breadcrumb = styled.div(({ theme }) => ({
    height: '1em',
    width: '1em',
    borderRadius: '0.5em',
    backgroundColor: theme.color('--breadcrumb-color')
}));

function Breadcrumbs() {
    return (
        <Breadbox>
            <Breadcrumb />
            <Breadcrumb />
            <Breadcrumb />
        </Breadbox>
    );
}

export default function Experience() {
    return (
        <>
            <h1 id='experience'>
                <InlineLogo margin='right' />
                Experience
                <InlineLogo margin='left' hideWhenScreenSmall />
            </h1>
            <JobFlex>
                <JobPosition title='Software Engineer II' dates='May 2021 - Present'>
                    <ul>
                        <li>Worked as the Lead Frontend Developer for one of our projects, but later voluntarily transitioned to Full Stack, taking on more responsibility and learning more technologies.</li>
                        <li>Worked on a multi-repo microservice application with local Docker for development and staged K8s deployment across multiple namespaces.</li>
                        <li>Frontend was in TypeScript/React; maintained a core component library in addition to the project-specific implementations.</li>
                        <li>Backend was in Java/Spring Boot with containerized microservices; again, multiple repos were used for maintaining common code separate from project-specific code.</li>
                        <li>Respected and maintained a strong emphasis on extensible code. All solutions were examined for the potential of making them generic.</li>
                        <li>PostgreSQL database was maintained with Flyway migrations.</li>
                        <li>Worked through a prototype/implement/feedback loop for UI/UX decisions, and regularly demoed new functionality to the customer.</li>
                        <li>Worked directly with over 20 teammates across projects to regularly interpret customer requirements and architect novel (but extensible) software solutions, documenting spike results and prioritizing effective communication.</li>
                        <li>Assisted with DevOps procedures related to GitLab CI/CD pipelines, bash scripting for common build tasks, and version/dependency management for release tagging.</li>
                        <li>Took initiative to work on toolchain improvements for better developer ergonomics on things like scripting and debugging, extensively documenting results in the team wiki.</li>
                    </ul>
                </JobPosition>
                <SkillListColumn>
                    <SkillList
                        title='Frontend Technologies'
                        color='green'
                        skills={[
                            'React',
                            'JavaScript',
                            'TypeScript',
                            'Vite',
                            'Webpack',
                            'Rollup',
                            'Nginx',
                            'NPM',
                            'Yarn',
                            'HTML',
                            'SCSS',
                            'CSS'
                        ]}
                    />
                    <SkillList
                        title='Backend Technologies'
                        color='blue'
                        skills={[
                            'Java',
                            'Spring Boot',
                            'REST APIs',
                            'Gradle',
                            'PostgreSQL',
                            'Flyway',
                            'Docker',
                            'Kubernetes'
                        ]}
                    />
                    <SkillList
                        title='Other Skills'
                        color='brown'
                        skills={[
                            'Git',
                            'GitLab CI/CD',
                            'Agile',
                            'Scrum',
                            'Demoing Features',
                            'Leading Frontend',
                            'Writing Feature Spikes',
                            'Reporting Bugs',
                            'Documenting Code',
                            'Architecting SW Solutions',
                            'Collaborating on Issues'
                        ]}
                    />
                </SkillListColumn>
                <Breadcrumbs />
                <JobPosition title='Software Engineering Intern' dates='May 2019 - Aug 2020'>
                    <ul>
                        <li>Full Stack Development ranging from backend scripting and architecture to frontend development.</li>
                        <li>Developed a Node.js-based serverless backend using AWS with an Angular7 frontend one year and a React frontend the next.</li>
                        <li>Serverless backend leveraged API Gateway routing to Lambda functions to pull data from RDS (MySQL) and perform tasks.</li>
                        <li>Used EC2s to fill in the gaps for services which needed persistent uptime.</li>
                        <li>Utilized CloudWatch for metrics and logging, and used CloudFormation templates to codify the software stack for version control.</li>
                    </ul>
                </JobPosition>
                <SkillListColumn>
                    <SkillList
                        title='Frontend Technologies'
                        color='green'
                        skills={[
                            'Angular7',
                            'React',
                            'JavaScript',
                            'HTML',
                            'CSS'
                        ]}
                    />
                    <SkillList
                        title='Backend Technologies'
                        color='blue'
                        skills={[
                            'Git',
                            'AWS',
                            'RDS',
                            'MySQL',
                            'API Gateway',
                            'REST APIs',
                            'EC2',
                            'Lambda',
                            'Node.js',
                            'CloudWatch',
                            'CloudFormation',
                        ]}
                    />
                </SkillListColumn>
                <Breadcrumbs />
                <JobPosition title='Junior Software Developer - Intern' dates='May 2018 - Aug 2018'>
                    <ul>
                        <li>Worked on a large enterprise application with both GUI and business logic in C# and a MySQL database.</li>
                        <li>Worked in an agile environment and gained my first professional exposure to git and scrum.</li>
                    </ul>
                </JobPosition>
                <SkillListColumn>
                    <SkillList
                        title='Technologies and Skills'
                        color='green'
                        skills={[
                            'C#',
                            'MySQL',
                            'Agile',
                            'Scrum',
                            'Git'
                        ]}
                    />
                </SkillListColumn>
            </JobFlex>
        </>
    );
}
