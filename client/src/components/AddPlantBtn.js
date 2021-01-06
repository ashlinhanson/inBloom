import React from "react";
import API from "../utils/API";

function AddPlantBtn(props) {

    let data = {
        common_name: props.displayName,
        image_url: props.img,
        trefle_id: props.plant.id,
        UserId: props.user
    }

    function onClick () {
        API.addPlant(data).then(res=>{
            console.log(res.data.common_name + " added to your garden!");
            // we'll need to update user state in order to re-render
            // the user's plants here as well
        })
        
    };
      
    return (
        <div>
            <button className="btn" onClick={onClick}>Add to Your Garden</button>
        </div>
    )

}

export default AddPlantBtn;