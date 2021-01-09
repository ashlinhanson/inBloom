import React from "react";

function InfoContainer(props) {
  console.log(props);

  return (
    <div>
      {props && (
        <div>
          <h5>General Info</h5>
          <ul>
            <li>Edible: {props.edible ? props.edible : "Not Available"}</li>
            <li>Flower: {props.flower ? props.flower : "Not Available"}</li>
            <li>
              Growth Form:{" "}
              {props.growthform ? props.growthform : "Not Available"}
            </li>
            <li>
              Growth Habit:{" "}
              {props.growthhabit ? props.growthhabit : "Not Available"}
            </li>
            <li>
              Growth Rate:{" "}
              {props.growthrate ? props.growthrate : "Not Available"}
            </li>
            <li>
              Average Height:{" "}
              {props.avgheight ? props.avgheight : "Not Available"}
            </li>
            <li>
              Maximum Height:{" "}
              {props.maxheight ? props.maxheight : "Not Available"}
            </li>
            <li>
              Toxicity: {props.toxicity ? props.toxicity : "Not Available"}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default InfoContainer;
