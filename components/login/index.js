import React, { useState } from 'react';

import * as Containers from './login.styles';

import { Email, Github, Google, Password, Twitter } from '../../icons';
import { useFormFields } from '../../lib';
import { useAuth } from '../../state';
import { Button, Divider, Icon, Input, Spacer, Text } from '../../tokens';
import { FormContainer } from '../containers';

const signInFormFields = {
    email: '',
    password: '',
    confirm_password: '',
    username: '',
    avatar_url: '',
    bio: '',
    name: '',
    mobile_number: '',
};

const LoginScreen = () => {
    const auth = useAuth();
    const [see, setSee] = useState(false);
    const [seeConfirm, setSeeConfirm] = useState(false);
    const [values, handleChange] = useFormFields(signInFormFields);
    const [loading, setLoading] = useState(false);
    const [signIn, setSignIn] = useState(true);

    const formSubmit = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);
            if (signIn) {
                auth.signIn('email', values.email, values.password);
            } else {
                auth.signUp({
                    email: values.email,
                    password: values.password,
                    ...values,
                });
            }
        } catch (error) {
            // TODO: add error management
        }
    };

    return (
        <FormContainer onSubmit={formSubmit}>
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
                required={true}
            />
            <Spacer />
            <Input
                icon={
                    <Password see={see} togglePassword={() => setSee(!see)} />
                }
                label={'Pasword'}
                type={see ? 'text' : 'password'}
                onChange={handleChange}
                value={values.password}
                placeholder="Enter your password here"
                name={'password'}
                required={true}
            />
            {!signIn && (
                <>
                    <Spacer />
                    <Input
                        icon={
                            <Password
                                see={seeConfirm}
                                togglePassword={() =>
                                    setSeeConfirm(!seeConfirm)
                                }
                            />
                        }
                        label={'Confirm Pasword'}
                        type={seeConfirm ? 'text' : 'password'}
                        onChange={handleChange}
                        value={values.confirm_password}
                        placeholder="Confirm your password"
                        name={'confirm_password'}
                        required={true}
                    />
                </>
            )}
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
                    hoverColor={'SNOW'}
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
                    hoverColor={'NIGHT'}
                    hover={true}
                    size={['md']}
                >
                    <Github />
                </Icon>
            </Containers.ProviderContainer>
        </FormContainer>
    );
};

export default LoginScreen;
