import React from "react";
import API from "../utils/API";
import "../App.css";

function DeleteBtn(props) {
  
  const [buttonMsg, setButtonMsg] = React.useState("Delete");

  function onClick() {  
    API.deletePlant(props.plant.id).then(res => {
      setButtonMsg("Successfully Deleted");
      // console.log(handleGetPlants(props.user.id));
        setTimeout(function removeFromGarden()
        {
          props.handleGetPlants(props.user.id);
        }, 1000);
    })
  };

  return (
    <div>
      <button className="Btn btn sublead" onClick={() => onClick()} >{buttonMsg}</button>
    </div>
  )
}

export default DeleteBtn;