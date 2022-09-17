import styled from 'styled-components';

const MainContainer = styled.main`
    width: 100%;
    height: 100vh;
    min-height: 100vh;

    position: relative;

    background-color: ${(props) => props.theme.colors['BASE']};

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 4rem;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        padding: 3rem;
    }
`;

export default MainContainer;
