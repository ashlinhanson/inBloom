import React from "react";
import MoreInfoBtn from "./MoreInfoBtn";
import AddPlantBtn from "./AddPlantBtn";
import fakeImg from "../images/planty.jpg";

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
      <h3 className="card-title">{displayname}</h3>
      <img
        src={img}
        className="card-img-top mx-auto"
        alt={props.plant.scientific_name}
        style={{ height: "350px" }}
      />
      
      <AddPlantBtn
        plant={props.plant}
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
