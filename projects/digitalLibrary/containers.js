import styled from 'styled-components';

export const TopContainer = styled.div`
    width: 100%;
    height: 40rem;

    border-radius: 2rem;

    background-color: ${(props) => props.theme.colors['FRENCH_PASS'][3]};
`;

export const CategoriesRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        flex-direction: row;
    }
`;

export const CategoriesContainer = styled.div`
    padding: 1rem;
    display: grid;

    border-radius: 2rem;

    grid-template-columns: repeat(2, 18rem);
    grid-template-rows: repeat(2, 18rem) 4rem;

    background-color: ${(props) => props.theme.colors['FRENCH_PASS'][3]};

    gap: 1rem 1rem;
`;

export const CategoryTitle = styled.div`
    grid-area: 3 / 1 / 3 / 3;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Categories = styled.div`
    overflow: hidden;
    border-radius: 2rem;
    background-color: ${(props) => props.theme.colors['DARK_SKY'][3]};
`;

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

