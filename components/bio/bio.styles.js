import styled from 'styled-components';

export const BioContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: flex-start;

    height: 100%;

    padding-top: 24rem;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        padding-top: 32rem;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;

    align-items: baseline;
`;

