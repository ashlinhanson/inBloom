import React, {useEffect} from "react";
import Login from "../components/Login";
import { GoogleLogin } from 'react-google-login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import inbloom from "../images/inbloom.png";
import API from '../utils/API';
import plant1 from '../images/plant1.png';
import plant2 from '../images/plant2.png';
import flower from '../images/flower.png';
import Palms from '../components/Palms';

const clientId = "21199057526-pc5p89vu1fos35ufcd9m597mmd84aq88.apps.googleusercontent.com";



function Home(props) {
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


     // Hack to hide the render of the SVG
// requestAnimationFrame(() => {
//     document.querySelector('.leftpalm-1, .leftpalm-2, .leftpalm-3, .leftpalm-4, .leftpalm-5, .leftpalm-6, .rightpalm-1, .rightpalm-2, .rightpalm-3, .rightpalm-4, .rightpalm-5, .rightpalm-6').style.opacity = 1;
//   });

   
    return(
     
        <div>

        <Palms/>

            {/* the header of the homepage  */}
            <div className="jumbotron bg-transparent text-center">
                <img className="inbloom" src={inbloom}></img>
                
            </div>
            {/* the google sign in button/established users */}
            <img id="plant1" src={plant1}></img>
            <img id="plant2" src={plant2}></img>
            {/* <img id="plant3" src={flower}></img> */}
            <div className="container col-10 col-md-3 mx-auto text-center" id="login-container">
                {/* <h3 className="lead m-5">Sign In</h3> */}
                <div className="align-middle mx-auto p-5" id="googleBtn">
                    { !props.user && <GoogleLogin 
                        setUser={props.setUser}
                        clientId={clientId}
                        buttonText="Login"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={"single_host_origin"}
                        isSignedIn={true}
                        />  }
                </div>

                {/* Not needed for MVP */}
                {/* this is will the new user button to trigger the new user routes */}
                {/* <h3 className="m-5">Create Account</h3>
                <button className="btn btn-outline-success">
                    <Link to={"/newuser"} />
                    Welcome
                </button> */}


            </div>
        </div>
    )
}

export default Home;