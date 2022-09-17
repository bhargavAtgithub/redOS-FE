import React, { useContext } from 'react';
import CursorContext from './cursor.context';

const useCursor = () => {
    const cursor = useContext(CursorContext);

    return {
        ...cursor,
    };
};

export default useCursor;
