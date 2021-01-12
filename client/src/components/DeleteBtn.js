import React from "react";
import API from "../utils/API";
import "../App.css";

function DeleteBtn(props) {
  
  function onClick() {
    
    API.deletePlant(props.plant.id).then(res => {
      console.log(res);
    })
  };

  return (
    <div>
      <button className="btn btn sublead" onClick={() => onClick()} >Delete Plant</button>
    </div>
  )
}

export default DeleteBtn;