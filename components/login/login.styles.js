import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: flex-start;

    height: 100%;
    width: 100%;

    padding-top: 12rem;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        padding-top: 16rem;
        width: 40rem;
    }
`;

export const FormContainer = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const ProviderContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;
