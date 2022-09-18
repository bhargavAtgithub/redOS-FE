import React from 'react';

import Link from 'next/link';

import { Avatar, Spacer, Text } from '../../tokens';
import * as Styles from './bio.styles';

const BioScreen = () => {
    return (
        <Styles.BioContainer>
            {' '}
            <Avatar src="/avatars/bhargavAvatar.png" />
            <Styles.TextContainer>
                <Text>I&lsquo;m</Text>
                <Spacer x={[1]} t={[2]}>
                    <Text weight={'md'} size={['lg']}>
                        Bhargav
                    </Text>
                </Spacer>
            </Styles.TextContainer>
            <Spacer y={[2]} />
            <Styles.TextContainer>
                <Text>
                    I’m a developer interested in design. Both system design and
                    design systems.{' '}
                </Text>
            </Styles.TextContainer>
            <Spacer />
            <Styles.TextContainer>
                <Text>
                    Currently working at{' '}
                    <Link href="https://www.terriblytinytales.com/" passHref>
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
            </Styles.TextContainer>
        </Styles.BioContainer>
    );
};

export default BioScreen;
