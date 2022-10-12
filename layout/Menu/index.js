import Image from 'next/image';
import React, { useState } from 'react';
import {
    Arrow,
    Book,
    Bookmark,
    Github,
    Instagram,
    LinkedIn,
    Moon,
    Sun,
    Twitter,
} from '../../icons';
import { Icon, Spacer, Text, Toggle } from '../../tokens';
import { ChatContainer, StickerContainer, StickerLink } from './ItemContainers';

import { useTheme } from 'styled-components';
import useCursor from '../../tokens/cursor/useCursor';

import Link from 'next/link';
import * as ItemContainers from './Container';
import GridContainer from './GridContainer';
import * as GridItems from './GridItems';

const MenuGrid = () => {
    const theme = useTheme();
    const cursor = useCursor();
    const [mouseOnToggle, setMouseOnToggle] = useState();

    return (
        <GridContainer>
            <GridItems.SocialGrid>
                <GridItems.SocialGridItem>
                    <a
                        href={'https://twitter.com/hidden_stack'}
                        target="_blank"
                    >
                        <Icon
                            color="TWITTER"
                            background={true}
                            border={false}
                            size={['lg', 'xl']}
                            iconColor="SNOW"
                        >
                            <Twitter />
                        </Icon>
                    </a>
                </GridItems.SocialGridItem>
                <GridItems.SocialGridItem>
                    <a
                        href="https://github.com/bhargavAtgithub"
                        target="_blank"
                    >
                        <Icon
                            color="NIGHT"
                            background={true}
                            border={false}
                            size={['lg', 'xl']}
                            iconColor="NIGHT"
                        >
                            <Github />
                        </Icon>
                    </a>
                </GridItems.SocialGridItem>
                <GridItems.SocialGridItem>
                    <a
                        href="https://www.instagram.com/hiddenstack/"
                        target={'_blank'}
                    >
                        <Icon
                            color="INSTAGRAM"
                            background={true}
                            border={false}
                            size={['lg', 'xl']}
                            iconColor="SNOW"
                        >
                            <Instagram />
                        </Icon>
                    </a>
                </GridItems.SocialGridItem>
                <GridItems.SocialGridItem>
                    <a
                        href="https://www.linkedin.com/in/bhargav-reddy-vangara/"
                        target={'_blank'}
                    >
                        <Icon
                            color="LINKEDIN"
                            background={true}
                            border={false}
                            size={['lg', 'xl']}
                            iconColor="SNOW"
                        >
                            <LinkedIn />
                        </Icon>
                    </a>
                </GridItems.SocialGridItem>
            </GridItems.SocialGrid>
            <GridItems.GridItem>
                <StickerLink
                    href="https://bhargav99.fambase.com"
                    target={'_blank'}
                >
                    <StickerContainer>
                        <Image src="/icons/fambaseLogo.png" layout="fill" />
                    </StickerContainer>
                    <Spacer y={[5]} />
                    <Icon
                        size={['rg']}
                        rotate={320}
                        hoverColor={'RED'}
                        hover={true}
                        hideCursor={true}
                    >
                        <Arrow />
                    </Icon>
                </StickerLink>
            </GridItems.GridItem>
            <GridItems.GridItem shipped={'DEVELOPMENT'}>
                <Text size={['lg', 'xl']} weight="md">
                    Stack
                </Text>
            </GridItems.GridItem>
            <GridItems.GridItem shipped={'DEVELOPMENT'}>
                <Text size={['lg', 'xl']} weight="md">
                    Timeline
                </Text>
            </GridItems.GridItem>
            <GridItems.ContentGridItem />
            <Link href={'/bookmarks'} as="/bookmarks">
                <GridItems.GridItem shipped={'SHIPPED'}>
                    <Icon size={['xl', 'xxl']} border={false}>
                        <Bookmark />
                    </Icon>
                </GridItems.GridItem>
            </Link>
            <GridItems.RedOsGridItem shipped={'DEVELOPMENT'}>
                <Text size={['rg', 'md']} weight="b" color="RED">
                    red
                </Text>
                <Text size={['h2', 'h1']} weight="xb">
                    OS
                </Text>
            </GridItems.RedOsGridItem>
            <GridItems.MediaGridItem shipped={'DEVELOPMENT'} />
            <GridItems.GridItem shipped={'DEVELOPMENT'}>
                <Icon size={['xl', 'xxl']} border={false}>
                    <Book />
                </Icon>
            </GridItems.GridItem>
            <GridItems.GridItem shipped={'DEVELOPMENT'}>
                <ChatContainer>
                    <Image src="/icons/chatIcon.png" layout="fill" />
                </ChatContainer>
                <Spacer />
            </GridItems.GridItem>
            <GridItems.GridItem>
                <ItemContainers.ThemeIconContainer
                    style={{ bottom: theme.darkMode ? '43%' : '33%' }}
                >
                    {theme.darkMode ? (
                        <Icon size={['lg']} border={false}>
                            <Moon />
                        </Icon>
                    ) : (
                        <Icon size={['xl']} border={false}>
                            <Sun />
                        </Icon>
                    )}
                </ItemContainers.ThemeIconContainer>
                <Toggle
                    onClick={() => {
                        theme.toggleTheme();
                        console.log('clicked');
                    }}
                    color={!theme.darkMode ? 'SNOW' : 'RED'}
                />
            </GridItems.GridItem>
        </GridContainer>
    );
};

export default MenuGrid;
