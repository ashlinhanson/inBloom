import React from "react";
import MoreInfoBtn from "./MoreInfoBtn";
import AddPlantBtn from "./AddPlantBtn";
import fakeImg from "../images/no-plant.png";

function SearchCard(props) {
  let displayname;
  let img;

  if (props.plant.common_name) {
    displayname = props.plant.common_name;
  } else {
    displayname = props.plant.scientific_name;
  }

  if (!props.plant.image_url) {
    img = fakeImg;
  } else {
    img = props.plant.image_url;
  }
  
  return (
    <div id="search-card"
      className="card m-2 p-2"
      key={props.plant.id}
      style={{ width: "350px" }}
    >
      <h3 className="card-title"><b>{displayname}</b></h3>
      <img
        src={img}
        className="card-img-top mx-auto"
        alt={props.plant.scientific_name}
        style={{ height: "350px" }}
      />
      
      <AddPlantBtn
        setGarden={props.setGarden}
        plant={props.plant}
        plantid={props.plant.id}
        displayname={displayname}
        userId={props.user}
        img={img}
      />
      
      <MoreInfoBtn
        plant={props.plant}
        plantId={props.plant.id}
        displayname={displayname}
        img={img}
        user={props.user}
      />
    </div>
  );
}

export default SearchCard;
