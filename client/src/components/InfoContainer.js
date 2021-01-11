import React from "react";

function InfoContainer(props) {
  console.log(props);

  return (
    <div>
      {props && (
        <div>
          <h5 className="sublead">General Info</h5>
          <ul className="text-left sublead">
            {props.edible && <li>Edible: {props.edible}</li>}
            {props.flower && <li>Flower: {props.flower}</li>}
            {props.growthform && <li>Growth Form: {props.growthform}</li>}
            {props.growthhabit && <li>Growth Habit: {props.growthhabit}</li>}
            {props.growthrate && <li>Growth Rate: {props.growthrate}</li>}
            {props.avgheight && <li>Average Height: {props.avgheight}</li>}
            {props.maxheight && <li>Maximum Height: {props.maxheight}</li>}
            {props.toxicity && <li>Toxicity: {props.toxicity}</li>}
          </ul>
        </div>
      )}
    </div>
  );
}

export default InfoContainer;
