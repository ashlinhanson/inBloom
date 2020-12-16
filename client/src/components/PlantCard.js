import React from "react";
import SoilInfoBtn from "./SoilInfoBtn";
import WaterBtn from "./WaterBtn";
import LightInfoBtn from "./LightInfoBtn";
import MoreInfoBtn from "./MoreInfoBtn"

function PlantCard() {

    return(
        <div className="row p-3 mx-auto">
                <div className="card m-2 p-2 mx-auto" key={common_name} style={{width: "350px"}}>
                    <h3 className="card-title">{common_name}</h3>
                    <img src={image_url} className="card-img-top" alt={scientific_name} style={{height: "350px"}}/>
                        <h6>{scientific_name}</h6>
                            <MoreInfoBtn />
                </div>
    </div>

    );
};

export default PlantCard;