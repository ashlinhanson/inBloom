import React from "react";

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
        <button className="btn btn-success">Add to you garden</button>
    </div>
 )

}

export default PlantInfo;