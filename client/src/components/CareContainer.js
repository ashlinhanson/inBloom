import React from "react";

function CareContainer(props) {
  console.log(props);

  return (
    <div>
      {props && (
        <div>
          <h5>Care Info</h5>
          <ul>
            <li>
              Ph Range: {props.phmin ? props.phmin : "Not Available"} - {props.phmax ? props.phmax : "Not Available"}
            </li>
            <li>
              Light: {props.light ? props.light : "Not Available"}
            </li>
            <li>
              Bloom Months: {props.bloommonths ? props.bloommonths : "Not Available"}
            </li>
            <li>
              Growth Months: {props.growthmonths ? props.growthmonths : "Not Available"}
            </li>
            <li>
              Humidity: {props.humidity ? props.humidity : "Not Available"}
            </li>
            <li>
              Precipitation Range: {props.minwater ? props.minwater : "Not Available"} mm - {props.maxwater ? props.maxwater : "Not Available"} mm
            </li>
            <li>
              Root Depth: {props.rootdepth ? props.rootdepth : "Not Available"} cm
            </li>
            <li>
              Temperature Range: {props.mintemp ? props.mintemp : "Not Available"}ºF - {props.maxtemp ? props.maxtemp : "Not Available"}ºF
            </li>
            <li>
              Soil Nutriments (Fertilizer): {props.soilnutriments ? props.soilnutriments : "Not Available"}
            </li>
            <li>
              Soil Salinity: {props.soilsalinity ? props.soilsalinity : "Not Available"}
            </li>
            <li>
              Soil Texture: {props.soiltexture ? props.soiltexture : "Not Available"}
            </li>
            <li>
              Soil Humidity: {props.soilhumidity ? props.soilhumidity : "Not Available"}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default CareContainer;
