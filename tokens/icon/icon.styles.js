import PropTypes from 'prop-types';
import styled from 'styled-components';
import SIZES from './icon.properties';

const styles = {
    border: ({ theme, color, border }) => {
        if (border) {
            if (color) {
                return `1px solid ${theme.colors[color][1]}`;
            } else {
                return `1px solid ${theme.colors['OUTER_SPACE'][1]}`;
            }
        }
        return 'none';
    },
    background: ({ theme, color, background }) => {
        // if (backgroundColor !== '') {
        //     console.log(backgroundColor);
        //     return theme.colors[backgroundColor][1];
        // }
        if (background) {
            if (color) {
                return theme.colors[color][1];
            } else {
                return theme.colors['OUTER_SPACE'][1];
            }
        } else {
            return 'transparent';
        }
    },
    activeBackground: ({ theme, color }) => {
        if (color) {
            return theme.colors[color][3];
        } else {
            return theme.colors['OUTER_SPACE'][3];
        }
    },
    hoverBackground: ({ theme, hoverColor, hover }) => {
        if (hover) {
            if (hoverColor) {
                return theme.colors[hoverColor].length > 1
                    ? theme.colors[hoverColor][3]
                    : theme.colors[hoverColor][0];
            } else {
                return theme.colors['OUTER_SPACE'][3];
            }
        }
    },
    iconColor: ({ theme, iconColor, trueColor }) => {
        if (trueColor) {
            return '';
        }
        if (iconColor) {
            return theme.colors[iconColor].length > 1
                ? theme.colors[iconColor][1]
                : theme.colors[iconColor][0];
        }

        return theme.colors['ICON'][0];
    },
    fillColor: ({ theme, fillColor, trueColor }) => {
        if (trueColor) {
            return '';
        }
        if (fillColor) {
            return theme.colors[fillColor].length > 1
                ? theme.colors[fillColor][1]
                : theme.colors[fillColor][0];
        }

        return '';
    },
    containerSize: ({ size }) => {
        if (size) {
            return SIZES.container[size[0]];
        } else {
            return SIZES.container['rg'];
        }
    },
    containerSizeLg: ({ size }) => {
        if (size) {
            if (size.length > 1) {
                return SIZES.container[size[1]];
            }
            return SIZES.container[size[0]];
        } else {
            return SIZES.container['rg'];
        }
    },
    iconSize: ({ size }) => {
        if (size) {
            return SIZES.icon[size[0]];
        } else {
            return SIZES.icon['rg'];
        }
    },
    iconSizeLg: ({ size }) => {
        if (size) {
            if (size.length > 1) {
                return SIZES.icon[size[1]];
            }
            return SIZES.icon[size[0]];
        } else {
            return SIZES.icon['rg'];
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
    transform: rotate(${(props) => props.rotate}deg);
    transition: all 150ms linear;
    &:active {
        // background-color: ${styles.activeBackground};
        // background-image: ${styles.activeBackground};
        transform: scale(0.9);
    }
    &:hover {
        background-color: ${styles.hoverBackground};
        background-image: ${styles.hoverBackground};
    }
    @media (min-width: ${(props) => props.theme.devices['lg']}) {
        height: ${styles.containerSizeLg}rem;
        width: ${styles.containerSizeLg}rem;
    }
`;

IconContainer.defaultProps = {
    size: ['rg'],
    color: 'OUTER_SPACE',
    backgorund: false,
    border: true,
    rotate: 0,
    hover: false,
    hoverColor: 'OUTER_SPACE',
};

IconContainer.propTypes = {
    size: PropTypes.array,
    color: PropTypes.string,
    backgorund: PropTypes.bool,
    border: PropTypes.bool,
    rotate: PropTypes.number,
    hover: PropTypes.bool,
    hoverColor: PropTypes.string,
};

const IconWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${styles.iconSize}rem;
    width: ${styles.iconSize}rem;
    transition: transform 300ms ease-out;
    &:hover {
        transform: scale(1.1);
    }
    @media (min-width: ${(props) => props.theme.devices['lg']}) {
        height: ${styles.iconSizeLg}rem;
        width: ${styles.iconSizeLg}rem;
    }
    svg {
        height: ${styles.iconSize}rem;
        width: ${styles.iconSize}rem;
        @media (min-width: ${(props) => props.theme.devices['lg']}) {
            height: ${styles.iconSizeLg}rem;
            width: ${styles.iconSizeLg}rem;
        }
    }
    path {
        fill: ${styles.fillColor};
        stroke: ${styles.iconColor};
    }
`;

IconWrapper.defaultProps = {
    size: ['rg'],
    iconColor: '',
    fillColor: '',
    iconBorder: true,
    trueColor: false,
};

IconWrapper.propTypes = {
    size: PropTypes.array,
    iconColor: PropTypes.string,
    fillColor: PropTypes.string,
    iconBorder: PropTypes.bool,
    trueColor: PropTypes.bool,
};

export { IconContainer, IconWrapper };
