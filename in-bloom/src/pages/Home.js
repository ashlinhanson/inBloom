import React from "react";
import Login from "../components/Login";
import Logout from "../components/Logout";


function Home() {


    return(
        <div>
            <div className="jumbotron">
                <h1>In Bloom</h1>
                </div>
            <div className="card m-5 col-4 mx-auto">
                <h3>Sign In</h3>
                <Login />
            </div>
        </div>
    )
}

export default Home;