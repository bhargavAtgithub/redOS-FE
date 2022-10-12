import styled from 'styled-components';

export const BookmarksContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: center;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
    }
`;

export const BookmarksColumnContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: flex-start;
`;
