import React from "react";
import AddPlantBtn from "./AddPlantBtn";
import InfoContainer from "./InfoContainer";
import Modal from "react-bootstrap/Modal";
import CareContainer from "./CareContainer";
import "../App.css";

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
      className="infoModal rounded mb-0"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="lead mx-auto">
          {props.displayname} {sciName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={props.img} alt="plant" style={{ width: "400px" }} className="text-center modalPhoto"></img>
        <InfoContainer
          id="infoContainer" className="text-center"
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
        <button onClick={props.onHide} className="Btn sublead">Close</button>
        {props.addbtn === "yes" &&
          <AddPlantBtn 
          setModalShow={props.setModalShow}
          setGarden={props.setGarden}
          plantid={props.plantid}
          displayname={props.displayname}
          img={props.img}
          plant={props.plantres}
          userId={props.user}
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
          />
        }
      </Modal.Footer>
    </Modal>
  );
}

export default PlantInfo;
