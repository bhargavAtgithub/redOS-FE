import React, { useEffect, useState } from 'react';

import * as Containers from './login.styles';

import { Email, Password } from '../../icons';
import { Button, Input, Spacer, Text } from '../../tokens';

const LoginScreen = () => {
    const [see, setSee] = useState(false);

    useEffect(() => {
        console.log('rendering');
    });

    return (
        <Containers.LoginContainer>
            <Containers.FormContainer>
                <Spacer>
                    <Text transform={'uppercase'} weight={'md'} size={['mi']}>
                        Sign In
                    </Text>
                </Spacer>
                <Input
                    icon={<Email />}
                    label={'Email'}
                    type="email"
                    onChange={() => {}}
                    placeholder="Enter your email here"
                />
                <Spacer />
                <Input
                    icon={
                        <Password
                            see={see}
                            togglePassword={() => setSee(!see)}
                        />
                    }
                    label={'Pasword'}
                    type={see ? 'text' : 'password'}
                    onChange={() => {}}
                    placeholder="Enter your password here"
                />
                <Spacer />
                <Button
                    size={'rg'}
                    varient={0}
                    title="SIGN IN"
                    width={'flex'}
                />
            </Containers.FormContainer>
        </Containers.LoginContainer>
    );
};

export default LoginScreen;
