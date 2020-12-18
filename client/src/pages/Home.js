import React from "react";
import { Link } from "react-router-dom";
import Login from "../components/Login";
import header from "../images/header3.png";
import monstera1 from "../images/monstera1.png"

function Home() {
    
    return(
        <div>
            <img className="monstera" src={monstera1}></img>
            {/* the header of the homepage  */}
            <div className="jumbotron bg-transparent text-center">
                <img className="inbloom" src={header}></img>
                <p className="sublead mt-5">Let's Get Growing</p>
            </div>
            {/* the google sign in button/established users */}
            <div className="container m-5 col-4 mx-auto text-center">
                <h3 className="lead m-5">Sign In</h3>
                {/* <Login /> */}


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