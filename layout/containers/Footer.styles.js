import styled from 'styled-components';

export const FooterStyles = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    // min-height: 30rem;
    padding: 0 3rem;
    width: 100%;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        padding: 0;
    }
`;

export const RedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 4rem;
    width: 4rem;

    position: relative;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        height: 10rem;
        width: 10rem;
    }
`;

export const LogoWrapper = styled.div`
    position: relative;
    height: 3.5rem;
    width: 4rem;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        height: 9rem;
        width: 10rem;
    }
`;
