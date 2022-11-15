import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import Meta from '../components/meta';
import { useAuth } from '../state';

import { PageLoadContainer } from '../components/containers';
import { ArrowUp, Cross } from '../icons';
import { Icon, Loader, Spacer } from '../tokens';
import * as Containers from './containers';
import MenuGrid from './Menu';

const BaseLayout = ({ children }) => {
    const auth = useAuth();
    const theme = useTheme();
    const router = useRouter();
    const [mouseOnCross, setMouseOnCross] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        if (openMenu) {
            setOpenMenu(!openMenu);
            menuRef.current.scrollTop = 0;
        }
    }, [router.asPath]);

    return (
        <>
            <Meta />
            <Containers.MainContainer>
                <Containers.LogoContainer>
                    <Link href="/" as="/">
                        <Image
                            src={`/assets/b-red-sm-${
                                theme.darkMode ? 'dark' : 'light'
                            }.png`}
                            layout="responsive"
                            width="8rem"
                            height="7rem"
                            priority={true}
                        />
                    </Link>
                </Containers.LogoContainer>
                {auth.loading ? (
                    <PageLoadContainer>
                        <Loader />
                    </PageLoadContainer>
                ) : (
                    children
                )}

                <Containers.MenuContainer open={openMenu} ref={menuRef}>
                    <MenuGrid />
                    <Spacer y={[2, 10]} x={[5]} />
                    <Containers.FooterContainer />
                    <Containers.AccessIconContainer>
                        <Containers.AccessIcon
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
                        </Containers.AccessIcon>
                    </Containers.AccessIconContainer>
                </Containers.MenuContainer>
            </Containers.MainContainer>
        </>
    );
};

export default BaseLayout;
