import React from "react";
import Image from "next/image";
import styled, { useTheme } from "styled-components";

import { Text, Spacer } from "../../tokens";

const FooterStyles = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-height: 30rem;
    width: 100%;

    // background-color: ${(props) => props.theme.colors["BASE"]};
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 4rem;
    width: 4rem;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        height: 16rem;
        width: 16rem;
    }
`;

const LogoWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const FooterContainer = () => {
    const theme = useTheme();

    return (
        <FooterStyles>
            <LogoContainer>
                <LogoWrapper>
                    <Image
                        src={`/assets/b-red-lg-${
                            theme.darkMode ? "dark" : "light"
                        }.png`}
                        layout="responsive"
                        width="8rem"
                        height="7rem"
                    />
                </LogoWrapper>
            </LogoContainer>
            {/* <Text>
                © 2022 - present <Text weight={"rg"}>V Bhargav Reddy</Text>. All
                Rights Reserved.
            </Text> */}
            <Text>V Bhargav Reddy</Text>
            <Text size={["mi"]}>Full Stack Engineer based in India</Text>
        </FooterStyles>
    );
};

export default FooterContainer;
