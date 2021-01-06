import React from "react";
import MoreInfoBtn from "./MoreInfoBtn";
import WaterBtn from "./WaterBtn";

function PlantCard(props) {

    return(
        <div className="row p-3 mx-auto">
                <div className="card m-2 p-2 mx-auto" key={props.common_name} style={{width: "350px"}}>
                    <h3 className="card-title">{props.common_name}</h3>
                    <img src={props.image_url} className="card-img-top" alt={props.scientific_name} style={{height: "350px"}}/>
                            <WaterBtn/>
                            <MoreInfoBtn />
                </div>
    </div>

    );
};

export default PlantCard;