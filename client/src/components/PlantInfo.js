import React from "react";
import AddPlantBtn from "./AddPlantBtn";
import InfoContainer from "./InfoContainer";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import API from "../utils/API";
 
function PlantInfo(props) { 
 return (
   <Modal
     {...props}
     size="lg"
     aria-labelledby="contained-modal-title-vcenter"
     centered
   >
   <Modal.Header closeButton>
     <Modal.Title id="contained-modal-title-vcenter">
       {props.displayname}
     </Modal.Title>
   </Modal.Header>
   <Modal.Body>
     <img src={props.img} alt="plant"></img>
     <InfoContainer>
 
     </InfoContainer>
   </Modal.Body>
   <Modal.Footer>
     <Button onClick={props.onHide}>Close</Button>
     <AddPlantBtn/>
   </Modal.Footer>
   </Modal>
 );
 
}
 
export default PlantInfo;
