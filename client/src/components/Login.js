import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../utils/refreshToken';
import controller from "../../../controllers/userController";

const clientId = "21199057526-pc5p89vu1fos35ufcd9m597mmd84aq88.apps.googleusercontent.com";


function Login() {
    const onSuccess = (res) => {
        console.log("[Login Success] currentUser:", res.profileObj);
        controller.findById(res.profileObj.id)
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