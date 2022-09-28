// Dummy change
import PropTypes from 'prop-types';
import React from 'react';

import Text from '../typography/text.component';
import * as Containers from './input.container';
import InputStyles from './input.styles';

const Input = ({
    color,
    icon,
    label,
    value,
    type,
    name,
    onChange,
    width,
    placeholder,
    required,
    disabled,
}) => {
    return (
        <Containers.InputContainer width={width}>
            {icon && (
                <Containers.IconContainer color={color}>
                    {icon}
                </Containers.IconContainer>
            )}
            <Containers.LabelContainer>
                {label && (
                    <Text
                        transform={'uppercase'}
                        size={['mi']}
                        weight={'md'}
                        color="TITLE"
                    >
                        <label>{label}</label>
                    </Text>
                )}
                <Text size={['rg']} width="100%" color="P">
                    <InputStyles
                        value={value}
                        type={type}
                        name={name}
                        onChange={onChange}
                        placeholder={placeholder}
                        required={required}
                        disabled={disabled}
                    />
                </Text>
            </Containers.LabelContainer>
        </Containers.InputContainer>
    );
};

Input.defaultProps = {
    color: 'TITLE',
    disabled: false,
};

Input.propTypes = {
    color: PropTypes.string,
    width: PropTypes.array,
    value: PropTypes.string,
    icon: PropTypes.object,
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
};

export default Input;
