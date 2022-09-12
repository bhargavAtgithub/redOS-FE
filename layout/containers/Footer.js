import React from "react";
import styled from "styled-components";

const FooterStyles = styled.section`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;

    background-color: ${(props) => props.theme.colors["BASE"]};
`;

const FooterContainer = () => {
    return <FooterStyles></FooterStyles>;
};

export default FooterContainer;
