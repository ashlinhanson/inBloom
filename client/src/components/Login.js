import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import API from '../utils/API';
// import { refreshTokenSetup } from '../utils/refreshToken';

const clientId = "21199057526-pc5p89vu1fos35ufcd9m597mmd84aq88.apps.googleusercontent.com";


function Login(props) {


    const onSuccess = (res) => {
        console.log("[Login Success] currentUser:", res.profileObj)
        let userEmail = res.profileObj.email;
        console.log(res);
        // without authentication on the backend
        // make api call to /api/loogin db.user.findone if one doesn't exist with googleid pass profileobj to backend and create a user with google info from state. if there is respond true, don't create new one. 
        // in callback function from api, run line below (21) to update state
        // props.setUser(res.profileObj);

// this is incorporating the backend

// in future, only pass the token id @ 27 for server side authentication
API.signInUser(res.profileObj).then(res=>{
    props.setUser(res.data);
})
        
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