import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "styled-components";

import * as Containers from "./containers";
import MenuGrid from "./Menu";
import { Icon, Spacer } from "../tokens";
import { ArrowUp, Cross } from "../icons";

import useCursor from "../tokens/cursor/useCursor";

const BaseLayout = ({ children }) => {
    const cursor = useCursor();
    const theme = useTheme();
    const [mouseOnCross, setMouseOnCross] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <Containers.MainContainer>
                <Containers.LogoContainer>
                    <Image
                        src={`/assets/b-red-lg-${
                            theme.darkMode ? "dark" : "light"
                        }.png`}
                        layout="responsive"
                        width="8rem"
                        height="7rem"
                    />
                </Containers.LogoContainer>
                {children}
                <Containers.MenuContainer open={openMenu}>
                    <MenuGrid />
                    <Spacer y={[10]} x={[5]} />
                    <Containers.FooterContainer />
                    <Containers.AccessIconContainer
                        onMouseEnter={() => {
                            cursor.toggleHidden(true);
                            setMouseOnCross(true);
                            console.log("enter");
                        }}
                        onMouseLeave={() => {
                            cursor.toggleHidden(false);
                            setMouseOnCross(false);
                        }}
                        onClick={() => {
                            setOpenMenu(!openMenu);
                            console.log("clicked");
                        }}
                    >
                        <Icon
                            color={mouseOnCross ? "RED" : ""}
                            iconColor={mouseOnCross ? "RED" : ""}
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
