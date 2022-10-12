import styled from 'styled-components';

const MainContainer = styled.main`
    width: 100%;
    min-height: 100vh;

    position: relative;

    background-color: ${(props) => props.theme.colors['BASE'][0]};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    padding: 4rem 4rem 10rem;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        padding: 3rem 3rem 30rem;
    }
`;

export default MainContainer;
