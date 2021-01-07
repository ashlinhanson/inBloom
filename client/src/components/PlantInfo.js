import React from "react";
import AddPlantBtn from "./AddPlantBtn";
import InfoContainer from "./InfoContainer";

function PlantInfo() {
 
 
    return (

    <div className="modal">
        <h3>{plant.common_name}</h3>
        <img src={plant.image_url}/>
        <h6>{plant.scientific_name}</h6>
        <InfoContainer/>
        <AddPlantBtn/>
    </div>
 )

}

export default PlantInfo;