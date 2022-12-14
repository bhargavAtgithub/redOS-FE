import styled from 'styled-components';

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-height: 30rem;
    width: 44rem;

    border: 1px solid ${(props) => props.theme.colors['BORDER'][0]};
    background-color: ${(props) => props.theme.colors['CARD'][0]};

    border-radius: 4rem;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        width: 40rem;
    }
`;
