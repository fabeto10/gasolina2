import React from 'react';
// import { GoogleOAuthProvider } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';

export function App(){
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });

    return(
        <button onClick={() => login()}>
            Sign in with Google 🚀{' '}
        </button>
    );
};