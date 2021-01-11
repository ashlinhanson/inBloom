import React from "react";
import MoreInfoBtn from "./MoreInfoBtn";
import fakeImg from "../images/planty.jpg";

function GardenCard(props) {
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
    <div
      className="card m-2 p-2"
      key={props.plant.trefle_id}
      style={{ width: "350px" }}
    >
      <h3 className="card-title">{displayname}</h3>
      <img
        src={img}
        className="card-img-top mx-auto"
        alt={props.plant.scientific_name}
        style={{ height: "350px" }}
      />
      <MoreInfoBtn
        plant={props.plant}
        trefle_id={props.plant.trefle_id}
        displayname={displayname}
        img={img}
        user={props.user}
      />
    </div>
  );
}

export default GardenCard;
