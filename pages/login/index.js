import React from 'react';

import LoginScreen from '../../components/login';

const Login = () => <LoginScreen />;

export default Login;

export async function getStaticProps(_context) {
    return {
        props: {},
    };
}
