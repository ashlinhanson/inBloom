import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import PlantCard from "../components/PlantCard"

function Garden() {
   const [plants, setPlants] = useState([]);
   
   // useEffect(() => {
   //    loadPlants()
   // }, [])
 
   // function loadPlants() {
   //    API.getPlants()
   //       .then(res =>
   //          setPlants(res.data)
   //       )
   //       .catch(err => console.log(err));
   // };
   return (
      <div>
         <div class="jumbotron">
            <h1 class="display-3 text-center">Your Garden</h1>
         </div>
         <Navbar /> 
        <div className="container p-3 mb-5 rounded text-center mx-auto" style={{width: "fit-content"}}>
            {plants.map(plant => (
               <PlantCard />
            ))}; 
        </div>
      </div>
   )

};

export default Garden;