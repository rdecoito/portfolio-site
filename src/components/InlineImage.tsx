import styled, { useTheme } from 'styled-components';

export interface InlineImageProps {
    margin?: 'right' | 'left' | 'both';
    hideWhenScreenSmall?: boolean;
}

export const InlineImage = styled.img<InlineImageProps>`
    height: 1em;
    width: 1em;
    transform: translateY(0.1em);
    ${({ theme, margin }) => margin === undefined ? '' : `
        ${margin === 'right' || margin === 'both' ? `margin-right: ${theme.padding(1)};` : ''}
        ${margin === 'left' || margin === 'both' ? `margin-left: ${theme.padding(1)};` : ''}
    `}
    ${({ hideWhenScreenSmall }) => !hideWhenScreenSmall ? '' : `
        @media (max-width: 450px) {
            display: none;
        }
    `}
`;

export const InlineLogo = (props: InlineImageProps & { ariaShow?: boolean; }) => {
    const { ariaShow, ...rest } = props;
    const theme = useTheme();
    return (
        <InlineImage
            src={theme.logoSource}
            alt='A cursive letter L with a red accent stroke'
            aria-hidden={!ariaShow}
            {...rest}
        />
    );
};
