import React from "react";

function InfoContainer(props) {
    console.log(props)
    
    return(
        <div>
            {props && 
            <div>
            <h5>General Info</h5>
            <ul>
                <li>Edible: {props.edible ? props.edible : "Not Available"}</li>
            </ul>
            </div>
            }
        </div> 
    )
}

export default InfoContainer;