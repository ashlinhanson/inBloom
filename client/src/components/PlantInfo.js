import React from "react";
import AddPlantBtn from "./AddPlantBtn";
import InfoContainer from "./InfoContainer";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import API from "../utils/API";

function PlantInfo(props) {
  let sciName = "";
  if (props.plantres){
    if (props.plantres.data.common_name === null) {
      sciName = "";
    } else {
      sciName = "(" + props.plantres.data.scientific_name + ")";
    }
  }
  

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.displayname} {sciName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={props.img} alt="plant" style={{width: "400px"}}></img>
        <InfoContainer></InfoContainer>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <AddPlantBtn />
      </Modal.Footer>
    </Modal>
  );
}

export default PlantInfo;
