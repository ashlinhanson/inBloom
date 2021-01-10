import React from "react";
import API from "../utils/API";

function AddPlantBtn(props) {

    let data = {
        common_name: props.displayname,
        image_url: props.img,
        trefle_id: props.id,
        UserId: props.UserId
    }

    function onClick () {
        console.log(props);
        
        API.addPlant(props).then(res=>{
            console.log("added to your garden!");
            console.log("clicked");
            console.log(props);
            // we should add a toast or popup to show that the plant was added to the user's garden
        })
        
    };
      
    return (
        <div>
            <button className="btn" onClick={onClick}>Add to Your Garden</button>
        </div>
    )

}

export default AddPlantBtn;