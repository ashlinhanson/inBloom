import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import PlantCard from "../components/PlantCard";
import API from "../utils/API";

function Garden(props) {
   // const [plants, setPlants] = useState([
   //    savedPlants: [];
   // ]);

   // const [user, setUser] = useState([]);
   
   // useEffect(() => {
   //    setUser = props.user
   // }, [])
 
   // function handleGetPlants() {
   //    API.findByEmail(results => {
   //       setPlants({ ...plants, savedPlants: results });
   //   });
   // };
   return (
      <div>
         <div className="jumbotron bg-success">
            <h1 className="display-3 text-center">Your Garden</h1>
         </div>
         <Navbar /> 
        {/* <div className="container p-3 mb-5 rounded text-center mx-auto" style={{width: "fit-content"}}>
            {plants.map(plant => (
               <PlantCard plant={setPlants.savedPlants} />
            ))}
        </div> */}
      </div>
   )

};

export default Garden;