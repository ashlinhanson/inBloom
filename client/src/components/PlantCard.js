import React from "react";
import SoilInfoBtn from "./SoilInfoBtn";
import WaterBtn from "./WaterBtn";
import LightInfoBtn from "./LightInfoBtn";

function PlantCard() {

    return (
        <div className="card">
            <SoilInfoBtn/>
            <WaterBtn/>
            <LightInfoBtn/>
        </div>

    )

};

export default PlantCard;