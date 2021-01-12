import React from "react";
import API from "../utils/API";
import "../App.css";

function AddPlantBtn(props) {
    const [buttonMsg, setButtonMsg] = React.useState("Add to Your Garden");

    let data = {
        common_name: props.displayname,
        image_url: props.img,
        trefle_id: props.plantid,
        UserId: props.userId
    }

    function onClick () {
        API.addPlant(data).then(res=>{
            console.log(res.data.common_name + " added to your garden!");
            // we should add a toast or popup to show that the plant was added to the user's garden
        })
        setButtonMsg("Added Successfully!")

    };
      
    return (
        <div>
            <button className="Btn btn sublead" onClick={() => onClick()} >{buttonMsg}</button>
        </div>
    )

}

export default AddPlantBtn;