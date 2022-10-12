import PropTypes from 'prop-types';
import React from 'react';

import { MessageContainer, ToastContainer } from './toast.styles';

import { Icon, Text } from '../../../tokens';

const Toast = ({ icon, message }) => {
    return (
        <ToastContainer>
            {icon && <Icon>{icon}</Icon>}
            <MessageContainer>
                <Text size={['sm']}>{message}</Text>
            </MessageContainer>
        </ToastContainer>
    );
};

Toast.defaultProps = {};

Toast.propTypes = {
    icon: PropTypes.object,
    message: PropTypes.string,
};

export default Toast;
