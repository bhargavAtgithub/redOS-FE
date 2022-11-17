import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100%;
    min-height: 100vh;

    position: relative;

    background-color: ${(props) => props.theme.colors['SNOW'][1]};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
    }
`;

export const BannerContainer = styled.div`
    width: 100%;
    height: 20rem;

    position: relative;

    background-color: ${(props) => props.theme.colors['FRENCH_PASS'][3]};

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        height: 40rem;
    }
`;

export const CategoriesColumn = styled.div`
    width: 100%;
    height: 90rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0 16rem;

    background-color: ${(props) => props.theme.colors['FRENCH_PASS'][3]};
`;

export const CategoryHeader = styled.div`
    width: 140rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const CategoriesRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const CategoriesSubCol = styled.div`
    width: 70rem;
    height: 70rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const CategoriesContainer = styled.div`
    padding: 0.5rem;
    display: flex;

    background-color: ${(props) => props.theme.colors['SNOW'][1]};
`;

export const RectangleContainer = styled(CategoriesContainer)`
    width: 100%;
    height: 30rem;
`;

export const SquareContainer = styled(CategoriesContainer)`
    width: 35rem;
    height: 35rem;
`;

export const CategoryTitle = styled.div`
    grid-area: 3 / 1 / 3 / 3;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Categories = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
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

export const Footer = styled.div`
    width: 100%;
    height: 30rem;

    background-color: ${(props) => props.theme.colors['FRENCH_PASS'][3]};
`;
