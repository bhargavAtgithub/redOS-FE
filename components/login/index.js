import React, { useEffect, useState } from 'react';

import * as Containers from './login.styles';

import { Email, Github, Google, Password, Twitter } from '../../icons';
import { useFormFields } from '../../lib';
import { useAuth } from '../../state';
import { Button, Divider, Icon, Input, Spacer, Text } from '../../tokens';

const signInFormFields = {
    email: '',
    password: '',
};

const LoginScreen = () => {
    const auth = useAuth();
    const [see, setSee] = useState(false);
    const [values, handleChange] = useFormFields(signInFormFields);
    const [loading, setLoading] = useState(false);
    const [signIn, setSignIn] = useState(true);

    useEffect(() => {
        console.log('rendering');
    });

    const formSubmit = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);
            console.log(values);
            if (signIn) {
                await auth.signIn(values.email, values.password);
            } else {
                await auth.signUp(values.email, values.password);
            }
        } catch (error) {}
    };

    return (
        <Containers.LoginContainer>
            <Containers.FormContainer onSubmit={formSubmit}>
                <Spacer>
                    <Text transform={'uppercase'} weight={'md'} size={['mi']}>
                        {signIn ? `Sign-In` : 'Sign-Up'}
                    </Text>
                </Spacer>
                <Input
                    icon={<Email />}
                    label={'Email'}
                    type="email"
                    onChange={handleChange}
                    value={values.email}
                    placeholder="Enter your email here"
                    name={'email'}
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
                    onChange={handleChange}
                    value={values.password}
                    placeholder="Enter your password here"
                    name={'password'}
                />
                <Spacer y={[2]} />
                <Button
                    size={'rg'}
                    varient={0}
                    title={signIn ? `Sign-In` : 'Sign-Up'}
                    width={'flex'}
                    type="submit"
                    isLoading={loading}
                />
                <Spacer w={['flex']} x={[0]} y={[2]}>
                    <Containers.ProviderContainer>
                        <Spacer w={['flex']} x={[0]} y={[2]}>
                            <Divider />
                        </Spacer>
                        <Spacer w={['flex']}>
                            <Text
                                align={'center'}
                                size={['sm']}
                                weight={'md'}
                                hoverBackground={'RED'}
                                transform={'uppercase'}
                                onClick={() => {
                                    let temp = !signIn;
                                    setSignIn(temp);
                                }}
                            >
                                {signIn ? `SIGN-UP` : 'SIGN-IN'}
                            </Text>
                        </Spacer>
                        <Spacer w={['flex']} x={[0]} y={[2]}>
                            <Divider />
                        </Spacer>
                    </Containers.ProviderContainer>
                </Spacer>
                <Containers.ProviderContainer>
                    <Icon
                        trueColor={true}
                        hideCursor={true}
                        hoverColor={'CARD'}
                        hover={true}
                        onClick={() => {}}
                        size={['md']}
                    >
                        <Google />
                    </Icon>
                    <Icon
                        hideCursor={true}
                        hoverColor={'TWITTER'}
                        hover={true}
                        iconColor={'CARD'}
                        size={['md']}
                    >
                        <Twitter />
                    </Icon>
                    <Icon
                        hideCursor={true}
                        hoverColor={'P'}
                        hover={true}
                        size={['md']}
                    >
                        <Github />
                    </Icon>
                </Containers.ProviderContainer>
            </Containers.FormContainer>
        </Containers.LoginContainer>
    );
};

export default LoginScreen;
