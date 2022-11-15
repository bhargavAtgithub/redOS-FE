import styled from 'styled-components';

const MenuContainer = styled.nav`
    width: 100vw;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    padding: 12rem 0rem 16rem;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: ${(props) => (props.open ? '0%' : '90%')};
    z-index: 10;

    transition: all 0.5s ease-out;

    background-color: ${(props) => props.theme.colors['BASE'][0]};

    overflow-y: ${(props) => (props.open ? 'scroll' : 'hidden')};

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        top: ${(props) => (props.open ? '0%' : '90%')};
        bottom: 0;

        padding: 24rem 0 12rem;
    }
`;

export default MenuContainer;
