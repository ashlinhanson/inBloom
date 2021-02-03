import React from "react";
import API from "../utils/API";
import "../App.css";

const AddPlantBtn = (props) => {
    const [buttonMsg, setButtonMsg] = React.useState("Plant it!");
   
    function onClick () {
        API.plantDetail(props.plantid).then(details =>{
            let data = {
                nickname: props.displayname,
                common_name: props.displayname,
                phmax: details.data.main_species.growth.ph_maximum,
                phmin: details.data.main_species.growth.ph_minimum,
                bloommonths: details.data.main_species.growth.bloom_months,
                light: details.data.main_species.growth.light,
                growthmonths: details.data.main_species.growth.growth_months,
                humidity: details.data.main_species.growth.atmospheric_humidity,
                minwater: details.data.main_species.growth.minimum_precipitation.mm,
                maxwater: details.data.main_species.growth.maximum_precipitation.mm,
                rootdepth: details.data.main_species.growth.minimum_root_depth.cm,
                mintemp: details.data.main_species.growth.minimum_temperature.deg_f,
                maxtemp: details.data.main_species.growth.maximum_temperature.deg_f,
                soilnutriments: details.data.main_species.growth.soil_nutriments,
                soilsalinity: details.data.main_species.growth.soil_salinity,
                soiltexture: details.data.main_species.growth.soil_texture,
                soilhumidity: details.data.main_species.growth.soil_humidity,
                image_url: props.img,
                trefle_id: props.plantid,
                UserId: props.userId
            }
           
            API.addPlant(data).then(res=>{

                 //updates state of garden and rerenders saved plants
    
                props.setGarden(oldGarden => {return[...oldGarden, data]});
    
                props.setModalShow && props.setModalShow(false)
                // we should add a toast or popup to show that the plant was added to the user's garden
            })
            setButtonMsg("Successfully Planted!")
            
        }) 
        

    };
    
    return (
        <div>
            <button className="Btn btn sublead" onClick={() => onClick()} >{buttonMsg}</button>
        </div>
    )

}

export default AddPlantBtn;