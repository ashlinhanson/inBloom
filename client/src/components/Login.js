import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';

const clientId = "21199057526-pc5p89vu1fos35ufcd9m597mmd84aq88.apps.googleusercontent.com";

import { refreshTokenSetup } from '../utils/refreshToken';

function Login() {
    const onSuccess = (res) => {
        console.log("[Login Success] currentUser:", res.profileObj);
        
    };

    const onFailure = (res) => {
        console.log("[Login failed] res: ", res);
        alert("invalid user");
    };

    return (
        <div>
            {/* the login button */}
            <GoogleLogin 
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
            />
        </div>
    );
}

export default Login;