import styled from 'styled-components';

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: flex-start;

    min-height: 100%;
    width: 100%;

    padding-top: 12rem;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        padding-top: 16rem;
        width: 40rem;
    }
`;

export default FormContainer;
