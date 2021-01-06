import React from "react";
import API from "../utils/API";

function AddPlantBtn(props) {

    let data = {
        common_name: props.displayName,
        image_url: props.img,
        trefle_id: props.plant.id,
        UserId: props.user
    }
    function onClick (){
        API.addPlant(data)
    }

    return (
        <div>
            <button className="btn" onClick={onClick}>Add to Your Garden</button>
        </div>
    )

}

export default AddPlantBtn;