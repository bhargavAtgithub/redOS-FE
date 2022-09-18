import styled from 'styled-components';
import { SIZES, VARIENTS } from './Button.properties';

const styles = {
    padding: ({ size }) => {
        return SIZES['padding'][size];
    },
    radius: ({ size }) => {
        return SIZES['radius'][size];
    },
    background: ({ theme, color, varient }) => {
        if (VARIENTS[varient].background) {
            let varientColor = VARIENTS[varient]['background'];
            return theme.colors[color][varientColor];
        }
        return 'transparent';
    },
    hoverBackground: ({ theme, color, varient }) => {
        return theme.colors[color][3];
    },
    activeBackground: ({ theme, color, varient }) => {
        return theme.colors[color][4];
    },
    border: ({ theme, color, varient }) => {
        if (VARIENTS[varient].border) {
            let varientColor = VARIENTS[varient]['border'];
            return theme.colors[color][varientColor];
        }
        return 'transparent';
    },
    width: ({ width }) => {
        if (width == 'flex') {
            return '100%';
        } else {
            return 'auto';
        }
    },
    iconColor: ({ color, theme, varient }) => {
        if (varient == 1) {
            return theme.colors['CARD'][0];
        }
        return theme.colors[color][1];
    },
};

const ButtonStyles = styled.button`
    width: ${styles.width};

    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;

    padding: ${styles.padding}rem;
    border: 1px solid ${styles.border};
    border-radius: ${styles.radius}rem;

    overflow: hidden;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    &:focus {
        outline: none;
    }

    transition: background 0.2s;
    background: ${styles.background};

    &:hover {
        background: ${styles.hoverBackground};
    }

    &:active {
        background: ${styles.activeBackground};
    }

    path {
        fill: ${styles.iconColor};
        stroke: ${styles.iconColor};
    }
`;

export default ButtonStyles;
