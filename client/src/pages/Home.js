import React from "react";
import { Link } from "react-router-dom";
import Login from "../components/Login";
import header from "../images/header.svg";

function Home() {
    
    return(
        <div>
            {/* the header of the homepage  */}
            <div className="jumbotron text-center bg-success text-white">
                <img src={header}></img>
                <p className="lead">Let's Get Growing</p>
            </div>
            {/* the google sign in button/established users */}
            <div className="container m-5 col-4 mx-auto text-center">
                <h3 className="m-5">Sign In</h3>
                <Login />


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