import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: flex-start;

    min-height: 100%;
    width: 100%;

    padding-top: 12rem;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        padding-top: 12rem;
        width: 40rem;
    }
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: flex-start;
`;

export { FormContainer, Form };
