import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTheme } from 'styled-components';

import ProfileCard from '../../components/profileCard';
import { Spacer, Text } from '../../tokens';
import * as Containers from './Footer.styles';

const FooterContainer = () => {
    const theme = useTheme();

    return (
        <Containers.FooterStyles>
            <ProfileCard />
            <Spacer x={[3]} y={[5, 10]} />
            <Containers.RedContainer>
                <Link href="/" as="/">
                    <Containers.LogoContainer>
                        <Containers.LogoWrapper>
                            <Image
                                src={`/assets/b-red-sm-${
                                    theme.darkMode ? 'dark' : 'light'
                                }.png`}
                                layout="fill"
                                priority={true}
                            />
                        </Containers.LogoWrapper>
                    </Containers.LogoContainer>
                </Link>
                <Spacer x={[3]} y={[2]} />
                <Text>V Bhargav Reddy</Text>
                <Text size={['mi']}>Full Stack Engineer based in India</Text>
                {/* <Text>
                © 2022 - present <Text weight={"rg"}>V Bhargav Reddy</Text>. All
                Rights Reserved.
            </Text> */}
            </Containers.RedContainer>
        </Containers.FooterStyles>
    );
};

export default FooterContainer;
