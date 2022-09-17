import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import CursorStyle from './cursor.styles';
import useCursor from './useCursor';

const Cursor = () => {
    const cursor = useCursor();

    return (
        <>
            <CursorStyle ref={cursor.cursor}>
                <Image src="/assets/cursor.png" layout="fill" />
            </CursorStyle>
        </>
    );
};

export default Cursor;
