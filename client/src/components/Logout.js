import { setScheduler } from "bluebird";
import React from "react";
import { GoogleLogout } from "react-google-login";
import Alert from "react-bootstrap/Alert";


const clientId = "21199057526-pc5p89vu1fos35ufcd9m597mmd84aq88.apps.googleusercontent.com";

function Logout(props) {
    const [show, setShow] = React.useState(false);

    if (show) {
        return (
        <Alert variant="warning" onClose={() => {setShow(false); props.setUser(null)}} dismissible>
            <Alert.Heading>Log out successful!</Alert.Heading>
            <p>
            We'll see you soon! 🌱
            </p>
        </Alert>
        );
    }

    const onSuccess = () => {
        console.log("Logout successful");
        setShow(true)
        
    };

    return(
        <div>
            <GoogleLogout 
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            style={{
                scope: "profile",
                width: "240",
                height: "50",
                'longtitle': "true",
                theme: "dark"
            }}
        ></GoogleLogout>
        </div>
    );

}

export default Logout;