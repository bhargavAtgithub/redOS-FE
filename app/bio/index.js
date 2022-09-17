import React from 'react';

import BioContainer, { TextContainer } from './bio.containers';
import { Avatar, Text, Spacer } from '../../tokens';

import Link from 'next/link';

const BioScreen = () => {
    return (
        <BioContainer>
            {' '}
            <Avatar src="/avatars/bhargav.png" />
            <TextContainer>
                <Text>I'm </Text>
                <Spacer x={[1]} t={[2]}>
                    <Text weight={'md'} size={['lg']}>
                        Bhargav
                    </Text>
                </Spacer>
            </TextContainer>
            <Spacer y={[2]} />
            <TextContainer>
                <Text>
                    I’m a developer interested in design. Both system design and
                    design systems.{' '}
                </Text>
            </TextContainer>
            <Spacer />
            <TextContainer>
                <Text>
                    Currently working at{' '}
                    <Link href="https://www.terriblytinytales.com/us" passHref>
                        <a target="_blank">
                            <Text hoverBackground={'RED'} weight={'md'}>
                                Terribly Tiny Tales{' '}
                            </Text>
                        </a>
                    </Link>{' '}
                    building{' '}
                    <Link href="https://fambase.com/in" passHref>
                        <a target="_blank">
                            <Text hoverBackground={'RED'} weight="md">
                                Fambase
                            </Text>
                        </a>
                    </Link>
                </Text>
            </TextContainer>
        </BioContainer>
    );
};

export default BioScreen;
