import Image from 'next/image';
import React, { useState } from 'react';
import { useTheme } from 'styled-components';

import { ArrowUp, Cross } from '../icons';
import { Icon, Spacer } from '../tokens';
import * as Containers from './containers';
import MenuGrid from './Menu';

// import useCursor from '../tokens/cursor/useCursor';

const BaseLayout = ({ children }) => {
    // const cursor = useCursor();
    const theme = useTheme();
    const [mouseOnCross, setMouseOnCross] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <Containers.MainContainer>
                <Containers.LogoContainer>
                    <Image
                        src={`/assets/b-red-lg-${
                            theme.darkMode ? 'dark' : 'light'
                        }.png`}
                        layout="responsive"
                        width="8rem"
                        height="7rem"
                    />
                </Containers.LogoContainer>
                {children}
                <Containers.MenuContainer open={openMenu}>
                    <MenuGrid />
                    <Spacer y={[2, 10]} x={[5]} />
                    <Containers.FooterContainer />
                    <Containers.AccessIconContainer
                        onMouseEnter={() => {
                            setMouseOnCross(true);
                        }}
                        onMouseLeave={() => {
                            setMouseOnCross(false);
                        }}
                        onClick={() => {
                            setOpenMenu(!openMenu);
                        }}
                    >
                        <Icon
                            hideCursor={true}
                            color={mouseOnCross ? 'RED' : ''}
                            iconColor={mouseOnCross ? 'RED' : ''}
                        >
                            {openMenu ? <Cross /> : <ArrowUp />}
                        </Icon>
                    </Containers.AccessIconContainer>
                </Containers.MenuContainer>
            </Containers.MainContainer>
        </>
    );
};

export default BaseLayout;
