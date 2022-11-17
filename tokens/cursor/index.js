import Image from 'next/image';
import React from 'react';
import CursorStyle from './cursor.styles';
import useCursor from './useCursor';

const Cursor = () => {
    const cursor = useCursor();

    return (
        <>
            <CursorStyle
                ref={cursor.cursor}
                defaultCursor={cursor.defaultCursor}
            >
                <Image src="/assets/cursor.png" layout="fill" priority={true} />
            </CursorStyle>
        </>
    );
};

export default Cursor;
