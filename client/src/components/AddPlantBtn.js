import React from "react";
import API from "../utils/API";
import "../App.css";

function AddPlantBtn(props) {

    let data = {
        common_name: props.displayname,
        image_url: props.img,
        trefle_id: props.plant.id,
        UserId: props.userId
    }

    function onClick () {
        API.addPlant(data).then(res=>{
            console.log(res.data.common_name + " added to your garden!");
            // we should add a toast or popup to show that the plant was added to the user's garden
        })
        
    };
      
    return (
        <div>
            <button className="Btn btn sublead" onClick={() => onClick()}>Add to Your Garden</button>
        </div>
    )

}

export default AddPlantBtn;