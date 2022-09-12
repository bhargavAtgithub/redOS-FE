import styled from "styled-components";
import PropTypes from "prop-types";
import SIZES from "./Icon.properties";

const styles = {
    border: ({ theme, color, border }) => {
        if (border) {
            if (color) {
                return `1px solid ${theme.colors[color][1]}`;
            } else {
                return `1px solid ${theme.colors["OUTER_SPACE"][1]}`;
            }
        }
        return "none";
    },
    background: ({ theme, color, background }) => {
        if (background) {
            if (color) {
                return theme.colors[color][1];
            } else {
                return theme.colors["OUTER_SPACE"][1];
            }
        } else {
            return "transparent";
        }
    },
    activeBackground: ({ theme, color }) => {
        if (color) {
            return theme.colors[color][3];
        } else {
            return theme.colors["OUTER_SPACE"][3];
        }
    },
    iconColor: ({ theme, iconColor }) => {
        if (iconColor) {
            return theme.colors[iconColor][1];
        }

        return theme.colors["OUTER_SPACE"][1];
    },
    containerSize: ({ size }) => {
        if (size) {
            return SIZES.container[size[0]];
        } else {
            return SIZES.container["rg"];
        }
    },
    containerSizeLg: ({ size }) => {
        if (size) {
            if (size.length > 1) {
                return SIZES.container[size[1]];
            }
            return SIZES.container[size[0]];
        } else {
            return SIZES.container["rg"];
        }
    },
    iconSize: ({ size }) => {
        if (size) {
            return SIZES.icon[size[0]];
        } else {
            return SIZES.icon["rg"];
        }
    },
    iconSizeLg: ({ size }) => {
        if (size) {
            if (size.length > 1) {
                return SIZES.icon[size[1]];
            }
            return SIZES.icon[size[0]];
        } else {
            return SIZES.icon["rg"];
        }
    },
};

const IconContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    height: ${styles.containerSize}rem;
    width: ${styles.containerSize}rem;

    border: ${styles.border};
    border-radius: 50%;
    background-color: ${styles.background};
    background-image: ${styles.background};

    &:active {
        background-color: ${styles.activeBackground};
    }

    @media (min-width: ${(props) => props.theme.devices["lg"]}) {
        height: ${styles.containerSizeLg}rem;
        width: ${styles.containerSizeLg}rem;
    }
`;

IconContainer.defaultProps = {
    size: ["rg"],
    color: "OUTER_SPACE",
    backgorund: false,
    border: true,
};

IconContainer.propTypes = {
    size: PropTypes.array,
    color: PropTypes.string,
    backgorund: PropTypes.bool,
    border: PropTypes.bool,
};

const IconWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    height: ${styles.iconSize}rem;
    width: ${styles.iconSize}rem;

    @media (min-width: ${(props) => props.theme.devices["lg"]}) {
        height: ${styles.iconSizeLg}rem;
        width: ${styles.iconSizeLg}rem;
    }

    svg {
        fill: ${styles.iconColor};
        height: ${styles.iconSize}rem;
        width: ${styles.iconSize}rem;

        @media (min-width: ${(props) => props.theme.devices["lg"]}) {
            height: ${styles.iconSizeLg}rem;
            width: ${styles.iconSizeLg}rem;
        }
    }

    path {
        stroke: ${styles.iconColor};
    }
`;

IconWrapper.defaultProps = {
    size: ["rg"],
    iconColor: "OUTER_SPACE",
    iconBorder: true,
};

IconWrapper.propTypes = {
    size: PropTypes.array,
    color: PropTypes.string,
    iconBorder: PropTypes.bool,
};

export { IconContainer, IconWrapper };
