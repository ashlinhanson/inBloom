import React from "react";
import PlantInfo from "./PlantInfo";
import Button from "react-bootstrap/Button";

function MoreInfoBtn(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        More Info
      </Button>

      <PlantInfo show={modalShow} 
        onHide={() => setModalShow(false)} 
        plant={props.plant} 
        plantId={props.plantId} 
        displayName={props.displayName} 
        img={props.img} 
        user={props.user} />
    </div>
  );
}

export default MoreInfoBtn;
