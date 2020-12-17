import React from "react";
import AddPlantBtn from "./AddPlantBtn";
import GrowthInfoBtn from "./GrowthInfoBtn";
import LightInfoBtn from "./LightInfoBtn";
import SoilInfoBtn from "./SoilInfoBtn";
import WaterCareBtn from "./WaterCareBtn";

function PlantInfo() {
 
 
    return (

    <div className="card">
        <h3>{plant.common_name}</h3>
        <img src={plant.image_url}/>
        <h6>{plant.scientific_name}</h6>
        <WaterCareBtn/>
        <SoilInfoBtn/>
        <LightInfoBtn/>
        <GrowthInfoBtn/>
        <AddPlantBtn/>
    </div>
 )

}

export default PlantInfo;