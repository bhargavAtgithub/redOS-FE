import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { VARIENTS } from "./Text.properties";

export const styles = {
    decoration: ({ decoration }) => {
        if (decoration) {
            if (decoration === "_") {
                return "underline";
            } else if (decoration === "-") {
                return "line-through";
            }
        }
        return "none";
    },
    maxHeight: ({ theme, size, maxLines }) => {
        if (maxLines) {
            const lineHeight = VARIENTSS.height[size];
            const maxHeight = parseFloat(lineHeight) * maxLines;
            return maxHeight;
        }
        return "initial";
    },
    overflow: ({ maxLines }) => {
        if (maxLines) {
            return "hidden";
        }
        return "initial";
    },
    textOverflow: ({ maxLines }) => {
        if (maxLines) {
            return "ellipsis";
        }
        return "initial";
    },
    ellipsis: ({ maxLines }) => {
        if (maxLines) {
            return "...";
        }
        return "";
    },
    weight: ({ theme, weight }) => {
        if (weight) {
            return VARIENTS.weight[weight];
        }
        return VARIENTS.weight["rg"];
    },
    size: ({ size }) => {
        return VARIENTS.size[size[0]];
    },
    lgSize: ({ size }) => {
        return VARIENTS.size[size.length > 1 ? size[1] : size[0]];
    },
    height: ({ size }) => {
        return VARIENTS.height[size];
    },
    lgHeight: ({ size }) => {
        return VARIENTS.height[size.length > 1 ? size[1] : size[0]];
    },
    color: ({ theme, color }) => {
        return theme.colors[color].length > 1
            ? theme.colors[color][1]
            : theme.colors[color];
    },
};

export const TextStylesContainer = styled.div`
    display: inline-block;

    font-family: ${(props) => props.family};
    font-weight: ${styles.weight};

    font-size: ${styles.size}rem;
    line-height: ${styles.height}rem;

    align-items: baseline;

    color: ${styles.color};
    text-decoration: ${styles.decoration};

    text-align: ${(props) => props.align};
    overflow: ${styles.overflow};
    text-overflow: ${styles.textOverflow};
    max-height: ${styles.maxHeight}rem;
    position: relative;

    &:hover {
        background-color: ${(props) => {
            return props.theme.colors[props.hoverBackground] &&
                props.theme.colors[props.hoverBackground].length === 4
                ? props.theme.colors[props.hoverBackground][3]
                : props.theme.colors[props.hoverBackground];
        }};
    }

    &::after {
        content: ${styles.ellipsis};
        position: absolute;
        bottom: 0rem;
        right: 0rem;
    }

    @media (min-width: ${(props) => props.theme.devices["lg"]}) {
        font-size: ${styles.lgSize};
        lineheight: ${styles.lgHeight};
    }
`;

const Text = (props) => (
    <TextStylesContainer {...props}>{props.children}</TextStylesContainer>
);

Text.defaultProps = {
    family: "Poppins",
    weight: "l",
    size: ["rg"],
    decoration: "none",
    align: "left",
    color: "P",
    hoverBackground: "",
};

Text.propTypes = {
    family: PropTypes.oneOf(Object.keys(VARIENTS.family)),
    weight: PropTypes.oneOf(Object.keys(VARIENTS.weight)),
    size: PropTypes.array,
    lineHeight: PropTypes.oneOf(Object.keys(VARIENTS.height)),
    decoration: PropTypes.oneOf(["_", "-", "none"]),
    align: PropTypes.oneOf([
        "left",
        "right",
        "center",
        "justify",
        "inherit",
        "initial",
    ]),
    letterSpacing: PropTypes.number,
    maxLines: PropTypes.number,
    hoverBackground: PropTypes.string,
};

export default Text;
