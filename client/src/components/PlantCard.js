import React from "react";
import SoilInfoBtn from "./SoilInfoBtn";
import WaterBtn from "./WaterBtn";
import LightInfoBtn from "./LightInfoBtn";
import MoreInfoBtn from "./MoreInfoBtn"

function PlantCard(props) {

    return(
        <div className="row p-3 mx-auto">
                <div className="card m-2 p-2 mx-auto" key={props.plant.common_name} style={{width: "350px"}}>
                    <h3 className="card-title">{props.plant.common_name}</h3>
                    {/* <img src={props.plant.image_url} className="card-img-top" alt={props.plant.scientific_name} style={{height: "350px"}}/> */}
                        {/* <h6>{props.plant.scientific_name}</h6> */}
                            <MoreInfoBtn />
                </div>
    </div>

    );
};

export default PlantCard;