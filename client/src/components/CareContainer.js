import React from "react";

function CareContainer(props) {
  console.log(props);

  return (
    <div>
      {props && (
        <div>
          <h5>Care Info</h5>
          <ul>
          {(props.phmin && props.phmax) && <li>pH Range: {props.phmin} - {props.phmax}</li>}
            {props.light && <li>Light: {props.light}</li>}
            {props.bloommonths && <li>Bloom Months: {props.bloommonths}</li>}
            {props.growthmonths && <li>Growth Months: {props.growthmonths}</li>}
            {props.humidity && <li>Humidity: {props.humidity}</li>}
            {(props.minwater && props.maxwater) && <li>Precipitation Range: {props.minwater}mm - {props.maxwater}mm</li>}
            {props.rootdepth && <li>Minimum Root Depth: {props.rootdepth}cm</li>}
            {(props.mintemp && props.maxtemp) && <li>Temperature Range: {props.mintemp}ºF - {props.maxtemp}ºF</li>}
            {props.soilnutriments && <li>Soil Nutriments: {props.soilnutriments} (pH Level)</li>}
            {props.soilsalinity != null && <li>Soil Salinity: {props.soilsalinity}</li>}
            {props.soiltexture && <li>Soil Texture: {props.soiltexture}</li>}
            {props.soilhumidity && <li>Soil Humidity: {props.soilhumidity}</li>}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CareContainer;
