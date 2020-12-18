import React from "react";
import Login from "../components/Login";
import header from "../images/header.svg";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Home() {
    
    return(
        <div>
            {/* the header of the homepage  */}
            <div className="jumbotron text-center">
                <img className="inbloom" src={header}></img>
                <p className="lead mt-5">Let's Get Growing</p>
            </div>
            {/* the google sign in button/established users */}
            <div className="container m-5 col-4 mx-auto text-center">
                <h3 className="lead m-5">Sign In</h3>
                
                <Login 
                />


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