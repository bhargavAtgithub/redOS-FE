import React from 'react';

import Link from 'next/link';

import { Avatar, Spacer, Text } from '../../tokens';
import * as Styles from './bio.styles';

import useCursor from '../../tokens/cursor/useCursor';

const BioScreen = () => {
    const cursor = useCursor();

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
                    <Link href="https://hashnode.com/" passHref>
                        <a target="_blank">
                            <Text
                                hoverBackground={'RED'}
                                onMouseEnter={() => {
                                    cursor.toggleHidden(true);
                                }}
                                onMouseLeave={() => {
                                    cursor.toggleHidden(false);
                                }}
                                weight={'md'}
                                cursor="hidden"
                            >
                                Hashnode{' '}
                            </Text>
                        </a>
                    </Link>
                </Text>
            </Styles.TextContainer>
        </Styles.BioContainer>
    );
};

export default BioScreen;
