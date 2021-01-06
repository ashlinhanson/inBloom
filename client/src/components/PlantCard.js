import React from "react";
import MoreInfoBtn from "./MoreInfoBtn";
import WaterBtn from "./WaterBtn";

function PlantCard(props) {

    return(
        <div className="row p-3 mx-auto overflow-auto">
                <div className="card m-2 p-2 mx-auto" key={props.plant.id} style={{width: "350px"}}>
                    <h3 className="card-title">{props.plant.common_name}</h3>
                    <img src={props.plant.image_url} className="card-img-top" alt={props.plant.scientific_name} style={{height: "350px"}}/>
                            <WaterBtn/>
                            <MoreInfoBtn />
                </div>
    </div>

    );
};

export default PlantCard;