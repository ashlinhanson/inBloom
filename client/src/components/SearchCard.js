import React from "react";
import MoreInfoBtn from "./MoreInfoBtn";
import AddPlantBtn from "./AddPlantBtn";
import fakeImg from "../images/no-plant.png";
import API from "../utils/API";

function SearchCard(props) {
  let displayname;
  let img;

  if (props.plant.common_name) {
    displayname = props.plant.common_name;
  } else {
    displayname = props.plant.scientific_name;
  }

  if (!props.plant.image_url) {
    img = fakeImg;
  } else {
    img = props.plant.image_url;
  }
  
const getInfo = (plantid) => {
   
    API.plantDetail(plantid).then(result => {
      return result;
    })
  }

  return (
    <div id="search-card"
      className="card m-2 p-2"
      key={props.plant.id}
      style={{ width: "350px" }}
    >
      <h3 className="card-title"><b>{displayname}</b></h3>
      <img
        src={img}
        className="card-img-top mx-auto"
        alt={props.plant.scientific_name}
        style={{ height: "350px" }}
      />
      
      <AddPlantBtn
        setGarden={props.setGarden}
        plant={props.plant}
        plantid={props.plant.id}
        displayname={displayname}
        userId={props.user}
        img={img}
        getInfo={getInfo}
        // phmax={result.data.main_species.growth.ph_maximum}
        // phmin={result.data.main_species.growth.ph_minimum}
        // bloommonths={result.data.main_species.growth.bloom_months}
        // light={result.data.main_species.growth.light}
        // growthmonths={result.data.main_species.growth.growth_months}
        // humidity={
        //   result.data.main_species.growth.atmospheric_humidity
        //   }
        // minwater={
        //   result.data.main_species.growth.minimum_precipitation.mm
        //   }
        // maxwater={
        //   result.data.main_species.growth.maximum_precipitation.mm
        //   }
        // rootdepth={result.data.main_species.growth.minimum_root_depth.cm}
        // mintemp={result.data.main_species.growth.minimum_temperature.deg_f}
        // maxtemp={result.data.main_species.growth.maximum_temperature.deg_f}
        // soilnutriments={
        //   result.data.main_species.growth.soil_nutriments
        //   }
        // soilsalinity={result.data.main_species.growth.soil_salinity}
        // soiltexture={result.data.main_species.growth.soil_texture}
        // soilhumidity={result.data.main_species.growth.soil_humidity}
      />
      
      <MoreInfoBtn
        setGarden={props.setGarden}
        plant={props.plant}
        plantId={props.plant.id}
        displayname={displayname}
        img={img}
        user={props.user}
      />
    </div>
  );
}

export default SearchCard;
