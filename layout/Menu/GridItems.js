import styled from "styled-components";

export const GridItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.align || "center"};
    justify-content: ${(props) => props.justify || "center"};

    position: relative;

    background-color: ${(props) =>
        props.bg
            ? props.theme.colors[props.bg][1]
            : props.theme.colors["CARD"]};
    background-image: ${(props) =>
        props.bg
            ? props.theme.colors[props.bg][1]
            : props.theme.colors["CARD"]};
    border: 1px solid ${(props) => props.theme.colors["BORDER"]};
    border-radius: 4rem;
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
