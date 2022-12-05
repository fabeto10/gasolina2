import React from 'react';
import { googleLogout } from '@react-oauth/google';

export function LogOut() {
    return(
        <button onClick={() => {
            googleLogout();
            console.log(googleLogout);
        }}>
            {"LogOut"}
        </button>
    )
};
