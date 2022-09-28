import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { useAuth } from '../state';

import { PageLoadContainer } from '../components/containers';
import { ArrowUp, Cross } from '../icons';
import { Icon, Loader, Spacer } from '../tokens';
import * as Containers from './containers';
import MenuGrid from './Menu';

const BaseLayout = ({ children }) => {
    const title = 'Bhargav Reddy';
    const description = 'This is my playground, experiments lab and portfolio.';
    const logo = '/favicons/favicon.ico';

    const auth = useAuth();
    const theme = useTheme();
    const router = useRouter();
    const [mouseOnCross, setMouseOnCross] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        if (openMenu) {
            setOpenMenu(!openMenu);
        }
    }, [router.asPath]);

    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href={logo} />
                <link rel="shortcut icon" type="image/x-icon" href={logo} />
                <link rel="apple-touch-icon" sizes="180x180" href={logo} />
                <meta name="theme-color" content="#FF3737" />

                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <meta itemProp="name" content={title} />
                <meta itemProp="description" content={description} />
                <meta itemProp="image" content={logo} />
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={logo} />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@hidden_stack" />
                <meta name="twitter:creator" content="@hidden_stack" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={logo} />
            </Head>
            <Containers.MainContainer>
                <Containers.LogoContainer>
                    <Link href="/">
                        <Image
                            src={`/assets/b-red-lg-${
                                theme.darkMode ? 'dark' : 'light'
                            }.png`}
                            layout="responsive"
                            width="8rem"
                            height="7rem"
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

                <Containers.MenuContainer open={openMenu}>
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
