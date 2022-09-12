import React from "react";
import { IconContainer, IconWrapper } from "./Icon.styles";

const Icon = ({ children, ...props }) => {
    return (
        <IconContainer {...props}>
            <IconWrapper {...props}>{children}</IconWrapper>
        </IconContainer>
    );
};

export default Icon;
