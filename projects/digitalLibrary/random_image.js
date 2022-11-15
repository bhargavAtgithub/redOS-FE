import React from 'react';

import { BookImage } from './card.component';
import { Categories } from './containers';

const RandomImageContainer = () => (
    <Categories>
        <BookImage
            src={`https://picsum.photos/id/${Math.floor(
                Math.random() * 100
            )}/200`}
            alt={''}
        />
    </Categories>
);

export default RandomImageContainer;
