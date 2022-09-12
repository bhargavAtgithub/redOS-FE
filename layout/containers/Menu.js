import styled from "styled-components";

const MenuContainer = styled.nav`
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    padding: 12rem 0rem;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: ${(props) => (props.open ? "0%" : "90%")};
    z-index: 10;

    transition: all 0.5s ease-out;

    background-color: ${(props) => props.theme.colors["BASE"]};

    overflow-y: ${(props) => (props.open ? "scroll" : "none")};

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        top: ${(props) => (props.open ? "0%" : "80%")};
        bottom: 0;

        padding: 24rem;
    }
`;

export default MenuContainer;
