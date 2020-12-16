import React from "react";
import { Link } from "react-router-dom";
import Login from "../components/Login";

function Home() {
    
    return(
        <div>
            <div className="jumbotron text-center bg-success text-white">
                <h1>inBloom</h1>
                <p className="lead">Let's Get Growing</p>

            </div>
            <div className="container m-5 col-4 mx-auto text-center">
                <h3 className="m-5">Sign In</h3>
                <Login />
                <h3 className="m-5">Create Account</h3>
                <button className="btn btn-outline-success">
                    <Link to={"/newuser"} />
                    Welcome
                </button>
            </div>
        </div>
    )
}

export default Home;