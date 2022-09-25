import styled from 'styled-components';

const LogoContainerStyles = styled.div`
    position: fixed;
    top: 5rem;
    left: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 4rem;
    width: 4rem;

    z-index: 10;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        top: 5rem;
        left: 4rem;
        height: 4rem;
        width: 4rem;
    }
`;

const LogoWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const LogoContainer = ({ children }) => {
    return (
        <LogoContainerStyles>
            <LogoWrapper>{children}</LogoWrapper>
        </LogoContainerStyles>
    );
};

export default LogoContainer;
