import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { uploadFile, useFormFields } from '../../lib';
import { useAuth } from '../../state';
import useCursor from '../../tokens/cursor/useCursor';

import { AvatarUpload, Form, FormContainer } from '../containers';

import { Avatar, Button, Input, Spacer } from '../../tokens';

const userProfileFields = {
    email: '',
    password: '',
    confirm_password: '',
    username: '',
    avatar_url: '',
    bio: '',
    name: '',
    mobile_number: '',
};

const Profile = () => {
    const auth = useAuth();
    const router = useRouter();
    const cursor = useCursor();
    const [values, handleChange] = useFormFields({
        ...userProfileFields,
        ...auth.user,
    });
    const [loading, setLoading] = useState(false);
    const [avatarInput, setAvatarInput] = useState(null);
    const [preview, setPreview] = useState(auth.user.avatar_url);

    const formSubmit = async (e) => {
        setLoading(true);
        try {
            e.preventDefault();
            setLoading(true);
            let avatarUrl = await uploadAvatar();
            await auth.updateProfile({
                ...values,
                avatar_url: avatarUrl,
            });
        } catch (error) {
            // TODO: add error management
        } finally {
            setLoading(false);
        }
    };

    const uploadAvatar = async () => {
        if (avatarInput) {
            let avatarUrl = await uploadFile(
                avatarInput,
                auth.user.user_id,
                auth.user.avatar_url !== undefined &&
                    auth.user.avatar_url !== ''
            );
            return avatarUrl;
        }
    };

    useEffect(() => {
        if (avatarInput) {
            // create the preview
            const objectUrl = URL.createObjectURL(avatarInput);
            setPreview(objectUrl);

            // free memory when ever this component is unmounted
            return () => URL.revokeObjectURL(objectUrl);
        }
    }, [avatarInput]);

    useEffect(() => {
        if (!auth.session) {
            router.push(`/`);
        }
    }, [router, auth.session]);

    return (
        <FormContainer>
            <Form onSubmit={formSubmit}>
                <label htmlFor="avatar-input">
                    <AvatarUpload
                        onMouseEnter={() => {
                            cursor.toggleHidden(true);
                        }}
                        onMouseLeave={() => {
                            cursor.toggleHidden(false);
                        }}
                    >
                        <Avatar src={preview} />
                    </AvatarUpload>
                </label>
                <input
                    type={'file'}
                    id="avatar-input"
                    style={{ display: 'none' }}
                    onChange={(e) => {
                        setAvatarInput(e.target.files[0]);
                    }}
                />

                <Spacer y={[2]} />
                <Input
                    label={'Email'}
                    type={'email'}
                    onChange={() => {}}
                    value={values.email}
                    placeholder="Enter your email here"
                    name={'name'}
                    required={true}
                    disabled
                />
                <Spacer />
                <Input
                    label={'Name'}
                    type={'text'}
                    onChange={handleChange}
                    value={values.name}
                    placeholder="Enter your name here"
                    name={'name'}
                    required={true}
                />
                <Spacer />
                <Input
                    label={'Mobile Number'}
                    type={'tel'}
                    onChange={handleChange}
                    value={values.mobile_number}
                    placeholder="Mobile Number"
                    name={'mobile_number'}
                />
                <Spacer y={[4]} />
                <Button
                    title={'Update'}
                    size="sm"
                    type="submit"
                    isLoading={loading}
                />
            </Form>
        </FormContainer>
    );
};

export default Profile;
