import React from "react";
import Navbarr from "../components/NavBar";
import Login from "../components/Login";
import Logout from "../components/Logout";


function Home() {


    return(
        <div>
            <div className="jumbotron text-center bg-success text-white">
                <h1>inBloom</h1>
            </div>
            <div className="container m-5 col-4 mx-auto text-center">
                <h3 className="m-5">Sign In</h3>
                <Login />
                <h3 className="m-5">Create Account</h3>
                <button className="btn btn-outline-success">Welcome!</button>
            </div>

            <Navbarr />
            <Login />
            <Logout />
        </div>
    )
}

export default Home;