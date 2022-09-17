import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TOGGLE_SIZES from './toggle.properties';

const styles = {
    getBackground: ({ theme, color }) => theme.colors['CARD'],
    getBeforeProperties: ({ theme, size, color }) => {
        const height = TOGGLE_SIZES[size].h;
        const left = (0.25 * height) / 2;
        const backgroundColor = theme.colors['SNOW'][3];
        const boxShadow = `0px 0px 6px rgba(188, 192, 200, 0.5);`;
        return `
        width: ${height * 0.75}rem;
        height: ${height * 0.75}rem;
        left: ${left}rem;
        top: ${left}rem;
        border-radius: ${height}rem;
        background-color: ${backgroundColor};
        box-shadow: ${boxShadow};
    `;
    },
    getCheckedBackground: ({ theme, color }) => theme.colors[color][1],
    getCheckedLeft: ({ size }) => {
        const { w, h } = TOGGLE_SIZES[size];
        return w - (h * 1.75) / 2;
    },
    hoverBorder: ({ theme, color }) => theme.colors['NIGHT'][3],
};

export const ToggleStyled = styled.input.attrs(({ props }) => ({
    ...props,
    type: 'checkbox',
}))`
    position: relative;
    width: ${(props) => TOGGLE_SIZES[props.size].w}rem;
    height: ${(props) => TOGGLE_SIZES[props.size].h}rem;
    border-radius: ${(props) => TOGGLE_SIZES[props.size].h}rem;
    -webkit-appearance: none;
    background: ${styles.getBackground};
    outline: none;
    box-shadow: inset 0px 0px 6px rgba(188, 192, 200, 0.5);
    transition: background 300ms linear, transform 300ms ease-out;

    &:hover {
        background: ${styles.hoverBorder};
        transform: scale(1.2);
    }

    &::before {
        position: absolute;
        content: '';
        transition: left 300ms;
        ${styles.getBeforeProperties}
    }

    &:checked {
        background: ${styles.getCheckedBackground};
        box-shadow: none;
        &::before {
            left: ${styles.getCheckedLeft}rem;
        }
    }
`;

const Toggle = (props) => <ToggleStyled {...props} />;

Toggle.defaultProps = {
    size: 'rg',
    color: 'RED',
};

Toggle.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
};

export default Toggle;
