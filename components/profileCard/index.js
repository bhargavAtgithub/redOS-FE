import Link from 'next/link';
import React from 'react';

import { useAuth } from '../../state';
import { Avatar, Button, Spacer, Text } from '../../tokens';
import * as Containers from './profile.containers';

const ProfileCard = () => {
    const auth = useAuth();

    if (!auth.session) {
        return (
            <Containers.SignInContainer>
                <Link href={`/login`} as={'/login'} passHref>
                    <a>
                        <Button title="SIGN IN" size={'sm'} />
                    </a>
                </Link>
                <Spacer />
                <Text size={['sm']} weight={'rg'}>
                    Because, Why not?
                </Text>
            </Containers.SignInContainer>
        );
    }

    return (
        <Link href={'/profile'}>
            <Containers.ProfileContainer>
                <Avatar text={auth.user.name} src={auth.user.avatar_url} />
                <Spacer />
                <Text>{auth.user.name}</Text>
                <Spacer y={[4]} />
                <Button
                    title={'Sign Out'}
                    size="mi"
                    onClick={(e) => {
                        e.stopPropagation();
                        auth.signOut();
                    }}
                />
            </Containers.ProfileContainer>
        </Link>
    );
};

export default ProfileCard;
