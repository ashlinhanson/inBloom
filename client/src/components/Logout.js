import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId = "21199057526-pc5p89vu1fos35ufcd9m597mmd84aq88.apps.googleusercontent.com";

function Logout() {
    
    const onSuccess = () => {
        alert("Logout made successfully");
    };

    return(
        <div>
            <GoogleLogout 
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
        ></GoogleLogout>
        </div>
    );

}

export default Logout;