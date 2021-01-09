import React from "react";
import PlantInfo from "./PlantInfo";
import Button from "react-bootstrap/Button";
import API from "../utils/API";


function MoreInfoBtn(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const [plantRes, setPlantRes] = React.useState();
    let plantID = props.plantId;
    console.log(props);
    
  

    function getInfo () {
        API.plantDetail(plantID).then(result => {
            setPlantRes(result);  
        })
    }
 return (
   <div>
     <Button variant="primary" onClick={() => [setModalShow(true), getInfo()]}>
       More Info
     </Button>
        {plantRes &&
        <PlantInfo show={modalShow}
        onHide={() => setModalShow(false)}
        plantres={plantRes}
        displayName={props.displayName}
        img={props.img}
        user={props.user}
        plantId={props.plantId}
        
    />}
     
   </div>
 );
}
 
export default MoreInfoBtn;
