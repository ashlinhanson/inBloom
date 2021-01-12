import React from "react";
import API from "../utils/API";
import "../App.css";

function DeleteBtn(props) {
  
  const [buttonMsg, setButtonMsg] = React.useState("Delete");

  function onClick() {  
    API.deletePlant(props.plant.id).then(res => {
      setButtonMsg("Successfully Deleted");
      // console.log(handleGetPlants(props.user.id));
      props.handleGetPlants(props.user.id);
    })
  };

  return (
    <div>
      <button className="btn btn sublead" onClick={() => onClick()} >{buttonMsg}</button>
    </div>
  )
}

export default DeleteBtn;