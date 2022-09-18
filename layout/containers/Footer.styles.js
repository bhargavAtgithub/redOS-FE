import styled from 'styled-components';

export const FooterStyles = styled.section`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-around;

    min-height: 60rem;
    padding: 0 3rem;
    width: 100%;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        flex-direction: row;
        padding: 0;
        min-height: 30rem;
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

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        height: 16rem;
        width: 16rem;
    }
`;

export const LogoWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;
