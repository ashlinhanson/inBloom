import React from "react";
import PlantInfo from "./PlantInfo";
import Button from "react-bootstrap/Button";
import API from "../utils/API";
import axios from "axios";
import fetch from 'node-fetch';


 
function MoreInfoBtn(props) {
 const [modalShow, setModalShow] = React.useState(false);
 let plantID = props.plantId;
 let plantResult;

 function getInfo () {
    API.plantDetail(plantID).then(result => {
        plantResult = result;
        console.log(plantResult)
    })  
 }
 return (
   <div>
     <Button variant="primary" onClick={() => [setModalShow(true), getInfo()]}>
       More Info
     </Button>
 
     <PlantInfo show={modalShow}
       onHide={() => setModalShow(false)}
       plantresult={plantResult}
       displayname={props.displayName}
       img={props.img}
       user={props.user} />
   </div>
 );
}
 
export default MoreInfoBtn;
