import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import PlantCard from "../components/PlantCard";
import API from "../utils/API";

function Garden() {
   // const [plants, setPlants] = useState([]);
   
   // useEffect(() => {
   //    loadPlants()
   // }, [])
 
   // function loadPlants() {
   //    API.getPlants()
   //       .then(res => {
   //          setPlants({...plants, plants: res})
   //       })
   //       .catch(err => console.log(err));
   // };
   return (
      <div>
         <div class="jumbotron bg-success">
            <h1 class="display-3 text-center">Your Garden</h1>
         </div>
         <Navbar /> 
        {/* <div className="container p-3 mb-5 rounded text-center mx-auto" style={{width: "fit-content"}}>
            {plants.map(plant => (
               <PlantCard plant={plants} />
            ))}
        </div> */}
      </div>
   )

};

export default Garden;