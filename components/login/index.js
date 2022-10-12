import React, { useState } from 'react';

import * as Containers from './login.styles';

import { Email, Github, Google, Password } from '../../icons';
import { useFormFields } from '../../lib';
import { useAuth } from '../../state';
import { Button, Icon, Input, Spacer } from '../../tokens';
import { useToast } from '../app';
import { Form, FormContainer } from '../containers';

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
    const toast = useToast();
    const [see, setSee] = useState(false);
    const [seeConfirm, setSeeConfirm] = useState(false);
    const [values, handleChange] = useFormFields(signInFormFields);
    const [signIn, setSignIn] = useState(true);

    const formSubmit = async (e) => {
        try {
            e.preventDefault();
            if (signIn) {
                auth.signIn('email', values.email, values.password);
            } else {
                if (values.password !== values.confirm_password) {
                    toast({
                        message: "Passwords don't match",
                    });
                }
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
        <FormContainer>
            <Containers.TabContainer>
                <Button
                    size={'rg'}
                    varient={signIn ? 1 : 2}
                    title={'Sign In'}
                    width={'flex'}
                    onClick={() => setSignIn(true)}
                />
                <Spacer />
                <Button
                    size={'rg'}
                    varient={!signIn ? 1 : 2}
                    title={'Sign Up'}
                    width={'flex'}
                    onClick={() => setSignIn(false)}
                />
            </Containers.TabContainer>
            <Spacer y={[2]} />
            <Form onSubmit={formSubmit}>
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
                    isLoading={auth.signing}
                />
            </Form>
            <Spacer y={[2]} />
            <Containers.ProviderContainer>
                <Icon
                    trueColor={true}
                    hideCursor={true}
                    hoverColor={'SNOW'}
                    hover={true}
                    onClick={() => auth.signIn(auth.PROVIDERS.GOOGLE)}
                    size={['md']}
                >
                    <Google />
                </Icon>
                <Spacer x={[3]} />
                {/* <Icon
                    hideCursor={true}
                    hoverColor={'TWITTER'}
                    hover={true}
                    iconColor={'CARD'}
                    size={['md']}
                    onClick={() => auth.signIn(auth.PROVIDERS.TWITTER)}
                >
                    <Twitter />
                </Icon> */}
                <Icon
                    hideCursor={true}
                    hoverColor={'NIGHT'}
                    hover={true}
                    size={['md']}
                    onClick={() => auth.signIn(auth.PROVIDERS.GITHUB)}
                >
                    <Github />
                </Icon>
            </Containers.ProviderContainer>
        </FormContainer>
    );
};

export default LoginScreen;
