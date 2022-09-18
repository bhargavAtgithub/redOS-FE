import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
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

const Avatar = ({ src, size, placeholder }) => (
    <AvatarStyles size={size}>
        <ImageContainer size={size}>
            <Image src={src} layout="fill" placeholder={placeholder} />
        </ImageContainer>
    </AvatarStyles>
);

Avatar.defaultProps = {
    size: 'rg',
    background: '',
};

Avatar.propTypes = {
    src: PropTypes.string,
    size: PropTypes.string,
};

export default Avatar;
