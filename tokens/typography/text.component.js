import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { VARIENTS } from './text.properties';

export const styles = {
    decoration: ({ decoration }) => {
        if (decoration) {
            if (decoration === '_') {
                return 'underline';
            } else if (decoration === '-') {
                return 'line-through';
            }
        }
        return 'none';
    },
    maxHeight: ({ theme, size, maxLines }) => {
        if (maxLines) {
            const lineHeight = VARIENTS.height[size];
            const maxHeight = parseFloat(lineHeight) * maxLines;
            return maxHeight;
        }
        return 'initial';
    },
    overflow: ({ maxLines }) => {
        if (maxLines) {
            return 'hidden';
        }
        return 'initial';
    },
    textTransform: ({ transform }) => {
        if (transform) {
            return transform;
        } else {
            return 'none';
        }
    },
    textOverflow: ({ maxLines }) => {
        if (maxLines) {
            return 'ellipsis';
        }
        return 'initial';
    },
    ellipsis: ({ maxLines }) => {
        if (maxLines) {
            return '...';
        }
        return '';
    },
    weight: ({ theme, weight }) => {
        if (weight) {
            return VARIENTS.weight[weight];
        }
        return VARIENTS.weight['rg'];
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
    hoverBackground: ({ theme, hoverBackground }) => {
        if (hoverBackground) {
            let colorsLen = theme.colors[hoverBackground].length;
            return theme.colors[hoverBackground][colorsLen > 1 ? 3 : 0];
        }
    },
};

export const TextStylesContainer = styled.div`
    display: inline-block;
    width: ${(props) => props.width};

    font-family: ${(props) => props.family};
    font-weight: ${styles.weight};

    font-size: ${styles.size}rem;
    line-height: ${styles.height}rem;

    align-items: baseline;

    color: ${styles.color};
    text-decoration: ${styles.decoration};
    text-transform: ${styles.textTransform};
    text-align: ${(props) => props.align};
    overflow: ${styles.overflow};
    text-overflow: ${styles.textOverflow};
    max-height: ${styles.maxHeight}rem;
    position: relative;
    word-break: break-word;

    transition: all 300ms linear;

    &:hover {
        ${(props) =>
            props.hoverBackground
                ? ` padding: 0 1rem;
                    border-radius: 1rem;`
                : ''}

        background-color: ${styles.hoverBackground};
    }

    &::after {
        // content: '${styles.ellipsis}';
        position: absolute;
        bottom: 0rem;
        right: 0.2rem;
    }

    @media (min-width: ${(props) => props.theme.devices['lg']}) {
        font-size: ${styles.lgSize}rem;
        line-height: ${styles.lgHeight}rem;
    }

    cursor: ${(props) =>
        props.cursor
            ? props.cursor
            : props.theme.cursorDisplay
            ? 'hidden'
            : 'auto'};
`;

const Text = (props) => (
    <TextStylesContainer {...props}>{props.children}</TextStylesContainer>
);

Text.defaultProps = {
    family: 'Poppins',
    weight: 'rg',
    size: ['rg'],
    width: 'auto',
    decoration: 'none',
    align: 'left',
    color: 'P',
    hoverBackground: '',
};

Text.propTypes = {
    family: PropTypes.oneOf(Object.keys(VARIENTS.family)),
    weight: PropTypes.oneOf(Object.keys(VARIENTS.weight)),
    size: PropTypes.array,
    lineHeight: PropTypes.oneOf(Object.keys(VARIENTS.height)),
    width: PropTypes.string,
    decoration: PropTypes.oneOf(['_', '-', 'none']),
    align: PropTypes.oneOf([
        'left',
        'right',
        'center',
        'justify',
        'inherit',
        'initial',
    ]),
    letterSpacing: PropTypes.number,
    maxLines: PropTypes.number,
    hoverBackground: PropTypes.string,
    transform: PropTypes.oneOf(['uppercase', 'lowercase', 'capitalize']),
    cursor: PropTypes.string,
};

export default Text;
