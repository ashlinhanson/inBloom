import React from "react";
import MoreInfoBtn from "./MoreInfoBtn";
import AddPlantBtn from "./AddPlantBtn";
import fakeImg from "../images/planty.jpg";
import DeleteBtn from "./DeleteBtn";

function PlantCard(props) {

    let displayName; 
    let img;
    
    if (props.plant.common_name){
        displayName = props.plant.common_name
    } else {
        displayName = props.plant.scientific_name
    }

    if (!props.plant.image_url){
        img = fakeImg;
    } else {
        img = props.plant.image_url
    }

    return(
        
                <div className="card m-2 p-2" key={props.plant.id} style={{width: "350px"}}>
                    <DeleteBtn/>
                    <h3 className="card-title">{displayName}</h3>
                    <img src={img} className="card-img-top" alt={props.plant.scientific_name} style={{height: "350px"}}/>
                        {props.isSearching && <AddPlantBtn plant={props.plant} displayName={displayName} user={props.user} img={img}/>}
                        <MoreInfoBtn />
                </div>
 

    );
};

export default PlantCard;

