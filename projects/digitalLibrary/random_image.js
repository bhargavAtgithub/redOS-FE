import React from 'react';

import { BookImage, ImageContainer, ImageOverlay } from './card.component';

import { Text } from '../../tokens';

const RandomImageContainer = ({ title, onClick }) => (
    <ImageContainer onClick={onClick}>
        <BookImage
            src={`https://picsum.photos/id/${Math.floor(
                Math.random() * 100
            )}/200`}
            alt={''}
        />
        <ImageOverlay>
            <Text
                size={['xl']}
                weight={'b'}
                color="SNOW"
                align={'center'}
                cursor="pointer"
            >
                {title}
            </Text>
        </ImageOverlay>
    </ImageContainer>
);

export default RandomImageContainer;
