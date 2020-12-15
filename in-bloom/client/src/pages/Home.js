import React from "react";
import Navbarr from "../components/NavBar";
import Login from "../components/Login";
import Logout from "../components/Logout";


function Home() {


    return(
        <div>
            <Navbarr />
            <Login />
            <Logout />
        </div>
    )
}

export default Home;