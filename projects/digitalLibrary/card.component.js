import styled from 'styled-components';

export const BooksCardContainer = styled.div`
    display: flex;
    flex-direction: column;

    border-radius: 2rem;
    overflow: hidden;

    width: 40rem;
    height: 45rem;

    background-color: ${(props) => props.theme.colors['CARD'][0]};

    border: 1px solid ${(props) => props.theme.colors['BORDER'][0]};

    transition: all 0.4s;

    &:hover {
        border: 1px solid ${(props) => props.theme.colors['RED'][1]};
        box-shadow: 0px 0px 2rem rgba(0, 0, 0, 0.2);
        transform: scale(1.01);
    }

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        width: 34rem;
    }
`;

export const BookImageContainer = styled.div`
    position: relative;
    height: 20rem;
    width: 100%;
`;

export const BookImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const BookTextContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: flex-start;
`;
