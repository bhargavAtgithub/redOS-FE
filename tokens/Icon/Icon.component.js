import React from 'react';
import { IconContainer, IconWrapper } from './Icon.styles';

import useCursor from '../cursor/useCursor';

const Icon = ({ children, hideCursor, ...props }) => {
    const cursor = useCursor();
    return (
        <IconContainer
            onMouseEnter={() => {
                if (hideCursor) {
                    cursor.toggleHidden(true);
                }
                console.log('enter');
            }}
            onMouseLeave={() => {
                if (hideCursor) {
                    cursor.toggleHidden(false);
                }
            }}
            {...props}
        >
            <IconWrapper {...props}>{children}</IconWrapper>
        </IconContainer>
    );
};

export default Icon;
