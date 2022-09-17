import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styled from 'styled-components';
import SIZES from './avatar.properties';

const AvatarStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${(props) => SIZES[props.size]}rem;
    height: ${(props) => SIZES[props.size]}rem;
    border-radius: 50%;

    position: relative;
`;

const Avatar = ({ src, size, placeholder }) => (
    <AvatarStyles size={size}>
        <Image src={src} layout="fill" placeholder={placeholder} />
    </AvatarStyles>
);

Avatar.defaultProps = {
    size: 'rg',
};

Avatar.propTypes = {
    src: PropTypes.string,
    size: PropTypes.string,
};

export default Avatar;
