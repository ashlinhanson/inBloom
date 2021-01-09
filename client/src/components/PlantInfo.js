import React from "react";
import AddPlantBtn from "./AddPlantBtn";
import InfoContainer from "./InfoContainer";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CareContainer from "./CareContainer";


function PlantInfo(props) {

  let sciName = "";
  let edible = "";
  let toxicity = "";
 
  let plantData = {};
  if (props.plantres) {
    plantData = props.plantres;
    if (props.plantres.data.common_name === null) {
      sciName = "";
    } else {
      sciName = "(" + props.plantres.data.scientific_name + ")";
    }
    if (props.plantres.data.main_species.edible === true) {
      edible = "Yes";
    } else if (!props.plantres.data.main_species.edible) {
      edible = null;
    } else {
      edible = "No";
    }
    if (props.plantres.data.main_species.toxicity === true) {
      toxicity = "Yes";
    } else if (!props.plantres.data.main_species.toxicity) {
      toxicity = null;
    } else {
      toxicity = "No";
    }
  } else {
    plantData = null;
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
        <img src={props.img} alt="plant" style={{ width: "400px" }}></img>
        <InfoContainer
          id="infoContainer"
          edible={edible}
          // distribution={props.plantres.data.main_species.native}
          flower={props.plantres.data.main_species.flower.color}
          growthform={
            props.plantres.data.main_species.specifications.growth_form
          }
          growthhabit={
            props.plantres.data.main_species.specifications.growth_habit
          }
          growthrate={
            props.plantres.data.main_species.specifications.growth_rate
          }
          avgheight={
            props.plantres.data.main_species.specifications.average_height.cm
          }
          maxheight={
            props.plantres.data.main_species.specifications.maximum_height.cm
          }
          toxicity={toxicity}
        ></InfoContainer>
        <CareContainer
          id="careContainer"
          phmax={props.plantres.data.main_species.growth.ph_maximum}
          phmin={props.plantres.data.main_species.growth.ph_minimum}
          bloommonths={props.plantres.data.main_species.growth.bloom_months}
          light={props.plantres.data.main_species.growth.light}
          growthmonths={props.plantres.data.main_species.growth.growth_months}
          humidity={
            props.plantres.data.main_species.growth.atmospheric_humidity
          }
          minwater={
            props.plantres.data.main_species.growth.minimum_precipitation.mm
          }
          maxwater={
            props.plantres.data.main_species.growth.maximum_precipitation.mm
          }
          rootdepth={props.plantres.data.main_species.growth.minimum_root_depth.cm}
          mintemp={props.plantres.data.main_species.growth.minimum_temperature.deg_f}
          maxtemp={props.plantres.data.main_species.growth.maximum_temperature.deg_f}
          soilnutriments={
            props.plantres.data.main_species.growth.soil_nutriments
          }
          soilsalinity={props.plantres.data.main_species.growth.soil_salinity}
          soiltexture={props.plantres.data.main_species.growth.soil_texture}
          soilhumidity={props.plantres.data.main_species.growth.soil_humidity}
        ></CareContainer>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <AddPlantBtn  common_name={props.displayName} 
                      image_url={props.img} 
                      trefle_id={props.id} 
                      UserId={props.user}
          />
      
      </Modal.Footer>
    </Modal>
  );
}

export default PlantInfo;
