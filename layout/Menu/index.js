import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Arrow,
    Github,
    Instagram,
    LinkedIn,
    Moon,
    Sun,
    Twitter,
} from "../../icons";
import { Icon, Spacer, Toggle } from "../../tokens";
import { StickerContainer, StickerLink } from "./ItemContainers";

import { useTheme } from "styled-components";
import useCursor from "../../tokens/cursor/useCursor";

import GridContainer from "./GridContainer";
import * as GridItems from "./GridItems";
import * as ItemContainers from "./Container";

const MenuGrid = () => {
    const theme = useTheme();
    const cursor = useCursor();
    const [mouseOnToggle, setMouseOnToggle] = useState();

    return (
        <GridContainer>
            <GridItems.SocialGrid>
                <GridItems.SocialGridItem>
                    <a
                        href={"https://twitter.com/hidden_stack"}
                        target="_blank"
                    >
                        <Icon
                            color="TWITTER"
                            background={true}
                            border={false}
                            size={["md", "lg"]}
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
                            size={["md", "lg"]}
                            iconColor="NIGHT"
                        >
                            <Github />
                        </Icon>
                    </a>
                </GridItems.SocialGridItem>
                <GridItems.SocialGridItem>
                    <a
                        href="https://www.instagram.com/hiddenstack/"
                        target={"_blank"}
                    >
                        <Icon
                            color="INSTAGRAM"
                            background={true}
                            border={false}
                            size={["md", "lg"]}
                            iconColor="SNOW"
                        >
                            <Instagram />
                        </Icon>
                    </a>
                </GridItems.SocialGridItem>
                <GridItems.SocialGridItem>
                    <a href="https://www.linkedin.com/in/bhargav-reddy-vangara/">
                        <Icon
                            color="LINKEDIN"
                            background={true}
                            border={false}
                            size={["md", "lg"]}
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
                    target={"_blank"}
                >
                    <StickerContainer>
                        <Image src="/icons/fambaseLogo.png" layout="fill" />
                    </StickerContainer>
                    <Spacer y={[5]} />
                    <Icon
                        size={["rg"]}
                        rotate={320}
                        hoverColor={"RED"}
                        hover={true}
                    >
                        <Arrow />
                    </Icon>
                </StickerLink>
            </GridItems.GridItem>
            <GridItems.GridItem />
            <GridItems.GridItem />
            <GridItems.ContentGridItem />
            <GridItems.GridItem />
            <GridItems.RedOsGridItem />
            <GridItems.MediaGridItem />
            <GridItems.GridItem />
            <GridItems.GridItem />
            <GridItems.GridItem>
                <ItemContainers.ThemeIconContainer
                    style={{ bottom: theme.darkMode ? "35%" : "29%" }}
                >
                    {theme.darkMode ? (
                        <Icon size={["lg"]} border={false} iconColor="">
                            <Moon />
                        </Icon>
                    ) : (
                        <Icon size={["xl"]} border={false} iconColor="">
                            <Sun />
                        </Icon>
                    )}
                </ItemContainers.ThemeIconContainer>
                <Toggle
                    onMouseEnter={() => {
                        cursor.toggleHidden(true);
                        setMouseOnToggle(true);
                        console.log("enter");
                    }}
                    onMouseLeave={() => {
                        cursor.toggleHidden(false);
                        setMouseOnToggle(false);
                    }}
                    onClick={() => {
                        theme.toggleTheme();
                        console.log("clicked");
                    }}
                    color={!theme.darkMode ? "SNOW" : "RED"}
                />
            </GridItems.GridItem>
        </GridContainer>
    );
};

export default MenuGrid;
