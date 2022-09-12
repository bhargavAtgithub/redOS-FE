import React from "react";

import BioContainer, { TextContainer } from "./bio.containers";
import { Avatar, Text } from "../../tokens";

const BioScreen = () => {
    return (
        <BioContainer>
            {" "}
            <Avatar src="/avatars/bhargav.png" />
            <TextContainer>
                <Text>I'm </Text>
                <Text weight={"bold"} size={["lg"]}>
                    Bhargav
                </Text>
            </TextContainer>
        </BioContainer>
    );
};

export default BioScreen;
