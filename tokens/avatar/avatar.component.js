import Image from 'next/image';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Text from '../typography/Text.component';
import SIZES from './Avatar.properties';

const styles = {
    avatarBackground: ({ theme }) => {
        let random = Math.floor(Math.random() * theme.colors['AVATAR'].length);
        let color = theme.colors['AVATAR'][random];
        // let color = theme.colors['AVATAR'][0];
        console.log(color, random);
        return color;
    },
};

const AvatarStyles = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;

    width: ${(props) => SIZES[props.size] + 1}rem;
    height: ${(props) => SIZES[props.size] + 1}rem;
    border-radius: 50%;

    overflow: hidden;

    background: ${styles.avatarBackground};
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${(props) => SIZES[props.size]}rem;
    height: ${(props) => SIZES[props.size]}rem;

    position: relative;
`;

const Avatar = ({ src, size, placeholder, text }) => {
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
        <AvatarStyles size={size}>
            {src ? (
                <ImageContainer size={size}>
                    <Image src={src} layout="fill" placeholder={placeholder} />
                </ImageContainer>
            ) : (
                <Text size={['rg']}>{letters}</Text>
            )}
        </AvatarStyles>
    );
};

Avatar.defaultProps = {
    size: 'rg',
    background: '',
    text: '',
};

Avatar.propTypes = {
    src: PropTypes.string,
    size: PropTypes.string,
    text: PropTypes.string,
};

export default Avatar;
