import styled from 'styled-components';

export const BooksContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: flex-start;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
    }
`;

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: flex-start;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
    }
`;

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: flex-start;
`;
