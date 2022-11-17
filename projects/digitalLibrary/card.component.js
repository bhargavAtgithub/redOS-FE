import styled from 'styled-components';

export const BooksCardContainer = styled.div`
    display: flex;
    flex-direction: column;

    overflow: hidden;

    width: 40rem;
    height: 45rem;

    background-color: ${(props) => props.theme.colors['CARD'][0]};

    border: 1px solid ${(props) => props.theme.colors['NIGHT'][0]};

    transition: all 0.4s;

    &:hover {
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

export const ImageContainer = styled.div`
    width: 100%;
    height: 100%;

    position: relative;
`;

export const ImageOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    padding: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme.colors['NIGHT'][1]};
    opacity: 0.6;

    cursor: pointer;
`;
