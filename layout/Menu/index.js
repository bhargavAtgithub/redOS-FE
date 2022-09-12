import React, { useState } from "react";
import { Github, Instagram, LinkedIn, Twitter } from "../../icons";
import { Icon, Toggle } from "../../tokens";

import { useTheme } from "styled-components";
import useCursor from "../../tokens/cursor/useCursor";

import GridContainer from "./GridContainer";
import * as GridItems from "./GridItems";

const MenuGrid = () => {
    const theme = useTheme();
    const cursor = useCursor();
    const [mouseOnToggle, setMouseOnToggle] = useState();

    return (
        <GridContainer>
            <GridItems.SocialGrid>
                <GridItems.SocialGridItem>
                    <Icon
                        color="TWITTER"
                        background={true}
                        border={false}
                        size={["md", "lg"]}
                        iconColor="SNOW"
                    >
                        <Twitter />
                    </Icon>
                </GridItems.SocialGridItem>
                <GridItems.SocialGridItem>
                    <Icon
                        color="NIGHT"
                        background={true}
                        border={false}
                        size={["md", "lg"]}
                        iconColor="NIGHT"
                    >
                        <Github />
                    </Icon>
                </GridItems.SocialGridItem>
                <GridItems.SocialGridItem>
                    <Icon
                        color="INSTAGRAM"
                        background={true}
                        border={false}
                        size={["md", "lg"]}
                        iconColor="SNOW"
                    >
                        <Instagram />
                    </Icon>
                </GridItems.SocialGridItem>
                <GridItems.SocialGridItem>
                    <Icon
                        color="LINKEDIN"
                        background={true}
                        border={false}
                        size={["md", "lg"]}
                        iconColor="SNOW"
                    >
                        <LinkedIn />
                    </Icon>
                </GridItems.SocialGridItem>
            </GridItems.SocialGrid>
            <GridItems.GridItem />
            <GridItems.GridItem />
            <GridItems.GridItem />
            <GridItems.ContentGridItem />
            <GridItems.GridItem />
            <GridItems.RedOsGridItem />
            <GridItems.MediaGridItem />
            <GridItems.GridItem />
            <GridItems.GridItem />
            <GridItems.GridItem>
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
