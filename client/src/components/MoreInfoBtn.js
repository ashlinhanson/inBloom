import React from "react";
import PlantInfo from "./PlantInfo";
import API from "../utils/API";
import "../App.css";


function MoreInfoBtn(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const [plantRes, setPlantRes] = React.useState();

    
    let plantID;
    let addBtn;

    if (props.plant.trefle_id) {
        plantID = props.plant.trefle_id;
        addBtn = "no"
    } else {
        plantID = props.plantId;
        addBtn= "yes"
    }
  

    function getInfo () {
        API.plantDetail(plantID).then(result => {
            setPlantRes(result);  
        })
    }
 return (
   <div>
     <button className="Btn btn sublead" onClick={() => [setModalShow(true), getInfo()]}>
       More Info
     </button>
        {plantRes &&
          <PlantInfo show={modalShow}
            onHide={() => setModalShow(false)}
            plantres={plantRes}
            plantid={plantID}
            displayname={props.displayname}
            img={props.img}
            user={props.user}
            addbtn={addBtn}
          />
        }
   </div>
 );
}
 
export default MoreInfoBtn;
