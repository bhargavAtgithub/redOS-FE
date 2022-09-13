import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import getMargins from "./spacer.utils";

const SpacerStyles = styled.div`
    background-color: transparent;

    ${(props) =>
        props.hasChildren
            ? `margin: ${getMargins(props, 0)};`
            : `height: ${
                  typeof props.y === "object" && props.y !== null
                      ? props.y[0]
                      : 1
              }rem;
           width: ${
               typeof props.x === "object" && props.x !== null ? props.x[0] : 1
           }rem;`}

    @media (min-width: ${(props) => props.theme.devices["lg"]}) {
        ${(props) =>
            props.hasChildren
                ? `margin: ${getMargins(props, 1)};`
                : `height: ${
                      typeof props.y === "object" && props.y !== null
                          ? props.y[Number(props.length > 1)]
                          : 1
                  }rem;
             width: ${
                 typeof props.x === "object" && props.x !== null
                     ? props.x[Number(props.length > 1)]
                     : 1
             }rem;`}
    }
`;

const Spacer = (props) => {
    return (
        <SpacerStyles {...props} hasChildren={!!props.children}>
            {props.children}
        </SpacerStyles>
    );
};

Spacer.defaultProps = {};

Spacer.propTypes = {
    xy: PropTypes.arrayOf(PropTypes.number),
    x: PropTypes.arrayOf(PropTypes.number),
    y: PropTypes.arrayOf(PropTypes.number),
    t: PropTypes.arrayOf(PropTypes.number),
    r: PropTypes.arrayOf(PropTypes.number),
    b: PropTypes.arrayOf(PropTypes.number),
    l: PropTypes.arrayOf(PropTypes.number),
};

export default Spacer;
