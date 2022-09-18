import React from 'react';
import { IconContainer, IconWrapper } from './icon.styles';

import useCursor from '../cursor/useCursor';

// Dummy change
const Icon = ({ children, hideCursor, onClick, ...props }) => {
    const cursor = useCursor();
    return (
        <IconContainer
            onClick={onClick}
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
