import React from "react";
import SoilInfoBtn from "./SoilInfoBtn";
import WaterBtn from "./WaterBtn";
import LightInfoBtn from "./LightInfoBtn";

function PlantCard(props) {

    return(
        <div className="card">
            <h2>{props.}</h2>
        </div>

    );
};

export default PlantCard;