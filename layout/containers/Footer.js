import Image from 'next/image';
import React from 'react';
import { useTheme } from 'styled-components';

import ProfileCard from '../../components/profileCard';
import { Spacer, Text } from '../../tokens';
import * as Containers from './Footer.styles';

const FooterContainer = () => {
    const theme = useTheme();

    return (
        <Containers.FooterStyles>
            <Containers.RedContainer>
                <Containers.LogoContainer>
                    <Containers.LogoWrapper>
                        <Image
                            src={`/assets/b-red-lg-${
                                theme.darkMode ? 'dark' : 'light'
                            }.png`}
                            layout="responsive"
                            width="8rem"
                            height="7rem"
                        />
                    </Containers.LogoWrapper>
                </Containers.LogoContainer>

                {/* <Text>
                © 2022 - present <Text weight={"rg"}>V Bhargav Reddy</Text>. All
                Rights Reserved.
            </Text> */}
                <Text>V Bhargav Reddy</Text>
                <Text size={['mi']}>Full Stack Engineer based in India</Text>
            </Containers.RedContainer>
            <Spacer y={[3]} />
            <ProfileCard />
        </Containers.FooterStyles>
    );
};

export default FooterContainer;
