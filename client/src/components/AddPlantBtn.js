import React from "react";
import API from "../utils/API";

function AddPlantBtn(props) {

    let data = {
        common_name: props.displayName,
        image_url: props.img,
        trefle_id: props.id,
        UserId: props.user
    }

    function onClick () {
        API.addPlant(data).then(res=>{
            console.log(res.data.common_name + " added to your garden!");
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