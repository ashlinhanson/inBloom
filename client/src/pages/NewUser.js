import React from "react";
import { Link } from "react-router-dom";
import Navbarr from "../components/Navbarr"

function NewUser() {

    return(
        <div>
            <Navbarr/>
        <div className="container">
            <h1 className="text-center m-2">Welcome to inBloom!</h1>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="First Name" aria-label="Username"/>
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Last Name" aria-label="Recipient's username"/>
            </div>
            <button className="btn btn-outline-success">
                <Link to={"/search"} /> 
                    Add your plants!
            </button>
        </div>
        </div>
    )


        //like a step by step form group??
        //1. Go to the search plants page
        //2. Either submit a photo to search or search by "common name??"
        //3. Find your plant and then add it to your garden.
    
}

export default NewUser;