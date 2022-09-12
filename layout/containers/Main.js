import styled from "styled-components";

const MainContainer = styled.main`
    width: 100%;
    height: 100%;
    min-height: 100vh;

    position: relative;

    background-color: ${(props) => props.theme.colors["BASE"]};
`;

export default MainContainer;
