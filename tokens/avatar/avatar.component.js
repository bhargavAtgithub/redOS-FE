import Image from 'next/image';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Spacer from '../spacer/spacer.component';
import Text from '../typography/text.component';
import { AvatarStyles, ImageContainer } from './avatar.styles';

const Avatar = ({
    src,
    size,
    placeholder,
    text,
    onMouseEnter,
    onMouseLeave,
}) => {
    const [letters, setLetters] = useState();

    useEffect(() => {
        if (text) {
            let temp = text.split(' ');
            let final = '';
            for (let i = 0; i < temp.length; i++) {
                if (temp[i] && temp[i][0]) {
                    final += temp[i][0];
                }
            }
            setLetters(final);
        }
    }, [text]);

    return (
        <AvatarStyles
            size={size}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {src ? (
                <ImageContainer size={size}>
                    <Image
                        src={src}
                        layout="fill"
                        placeholder={placeholder}
                        priority={true}
                    />
                </ImageContainer>
            ) : (
                <Spacer>
                    <Text size={['h4']} weight={'b'} color={'SNOW'}>
                        {letters}
                    </Text>
                </Spacer>
            )}
        </AvatarStyles>
    );
};

Avatar.defaultProps = {
    size: 'rg',
    background: '',
    text: '',
    onMouseEnter: () => {},
    onMouseLeave: () => {},
};

Avatar.propTypes = {
    src: PropTypes.string,
    size: PropTypes.string,
    text: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
};

export default Avatar;
