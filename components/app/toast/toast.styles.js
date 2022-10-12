import styled, { keyframes } from 'styled-components';

const ToastsContainer = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;

    justify-content: flex-end;
    align-items: center;

    position: fixed;
    bottom: 0;

    right: 0;
    z-index: 800;

    padding: 2rem 0;
`;

const ToastAnimation = keyframes`
    0% {
        margin-bottom: -10rem;
        margin-top: 3rem;
    }
    100% {
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
`;

const ToastContainer = styled.div`
    width: 80%;
    max-width: 32rem;
    min-height: 7rem;

    border-radius: 1rem;

    box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.08);
    border: 1px solid ${(props) => props.theme.colors['BORDER'][0]};
    background: ${(props) => props.theme.colors['CARD'][0]};

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    gap: 1rem;

    padding: 1rem 2rem;
    margin: 1rem 2rem;

    animation: ${ToastAnimation} 0.2s linear;

    z-index: 800;

    @media (min-width: ${(props) => props.theme.devices['lg']}) {
        width: 50rem;
        max-width: 40rem;
    }
`;

const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    flex-grow: 1;
`;

export { ToastsContainer, ToastContainer, MessageContainer };
