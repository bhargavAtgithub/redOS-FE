import styled from 'styled-components';

export const GridItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.align || 'center'};
    justify-content: ${(props) => props.justify || 'center'};

    position: relative;

    background-color: ${(props) =>
        props.bg
            ? props.theme.colors[props.bg][1]
            : props.theme.colors['CARD'][0]};
    background-image: ${(props) =>
        props.bg
            ? props.theme.colors[props.bg][1]
            : props.theme.colors['CARD'][0]};
    border: 1px solid ${(props) => props.theme.colors['BORDER'][0]};
    border-radius: 4rem;

    transition: all 0.4s;

    &:after {
        position: absolute;
        bottom: 0rem;
        content: '';
        font-size: 1.4rem;
        color: ${(props) => props.theme.colors['STORM'][1]};
        transition: all 0.4s;
    }

    ${(props) =>
        props.shipped === 'SHIPPED'
            ? `
        &:hover {
            border: 1px solid ${props.theme.colors['SPEARMINT'][1]};
            box-shadow: 0px 0px 2rem rgba(0, 0, 0, 0.2);
            transform: scale(1.01);

            &:after {
                position: absolute;
                bottom: 2rem;
                content: 'Shipped!';
                font-size: 1.4rem;
                color: ${props.theme.colors['SPEARMINT'][1]}
            }
        }
        `
            : props.shipped === 'DEVELOPMENT'
            ? `&:hover {
            border: 1px solid ${props.theme.colors['STORM'][1]};
            box-shadow: 0px 0px 2rem rgba(0, 0, 0, 0.2);
            transform: scale(1.01);

            &:after {
                position: absolute;
                bottom: 2rem;
                content: 'Under development!';
                font-size: 1.4rem;
                color: ${props.theme.colors['STORM'][1]}
            }
        }`
            : null}
`;

export const SocialGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem 1rem;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
`;

export const SocialGridItem = styled(GridItem)`
    border-radius: 50%;
`;

export const ContentGridItem = styled(GridItem)`
    flex-direction: row;
    align-items: center;
    justify-content: center;

    grid-area: 3 / 1 / 4 / -1;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        grid-area: 2 / 1 / 2/ 3;
    }
`;

export const RedOsGridItem = styled(GridItem)`
    grid-area: 4 / 2 / 6 / -1;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        grid-area: 2 / -2 / -2 / -1;
    }
`;

export const MediaGridItem = styled(GridItem)`
    grid-area: 7 / 1 / -1 / -1;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        grid-area: -3 / 1 / -1 /3;
    }
`;
