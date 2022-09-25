import React, { useEffect } from 'react';

import { useAuth } from '../state';

const Logout = () => {
    const auth = useAuth();

    useEffect(() => {
        auth.signOut();
    });

    return <></>;
};

export default Logout;
