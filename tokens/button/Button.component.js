import PropTypes from 'prop-types';
import React from 'react';

import Loader from '../loader';
import Text from '../typography/text.component';
import ButtonStyles from './button.styles';

import useCursor from '../cursor/useCursor';

const Button = ({
    title,
    leftIcon,
    rightIcon,
    size,
    color,
    varient,
    width,
    onClick,
    onMouseOver,
    isLoading,
    ...props
}) => {
    const cursor = useCursor();

    return (
        <ButtonStyles
            size={size}
            color={color}
            varient={varient}
            width={width}
            onClick={onClick}
            // onMouseOver={onMouseOver}
            onMouseEnter={() => {
                cursor.toggleHidden(true);
                console.log('enter');
            }}
            onMouseLeave={() => {
                cursor.toggleHidden(false);
            }}
            {...props}
        >
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    {leftIcon}
                    <Text
                        weight={'md'}
                        size={[size]}
                        color={varient === 1 ? 'CARD' : color}
                        align={'center'}
                        width="100%"
                    >
                        {title}
                    </Text>
                    {rightIcon}
                </>
            )}
        </ButtonStyles>
    );
};

Button.defaultProps = {
    size: 'rg',
    color: 'RED',
    varient: 0,
    isLoading: false,
};

Button.propTypes = {
    size: PropTypes.string,
    title: PropTypes.string,
    leftIcon: PropTypes.object,
    rightIcon: PropTypes.object,
    color: PropTypes.string,
    varient: PropTypes.oneOf([0, 1, 2]),
    width: PropTypes.oneOf(['flex', 'auto']),
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    isLoading: PropTypes.bool,
};

export default Button;
