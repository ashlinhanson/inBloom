import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import PlantCard from "../components/PlantCard";
import API from "../utils/API";

function Garden(props) {

     // State and setter for search results
   const [results, setResults] = useState([]);
   
   
   useEffect(() => {
      console.log(props.user.id)
   }, [])
 
   // function handleGetPlants() {
   //    API.findByEmail(results => {
   //       setPlants({ ...plants, savedPlants: results });
   //   });
   console.log(results)
   return (
      <div>
         <div className="jumbotron bg-success">
            <h1 className="display-3 text-center">Your Garden</h1>
         </div>
         <Navbar setResults={setResults} results={results} /> 
         <div className="container p-3 mb-5 rounded text-center mx-auto" style={{width: "fit-content"}}>
        
        {/* trigger a modal with belows results that you can add to the garden */}
         {results.map(result => (
                    <div key={result.id}>
                        <PlantCard plant={result}/>
                    </div>
  
               
                  ))}

{/* this can show saved ones */}

        {/* <div className="container p-3 mb-5 rounded text-center mx-auto" style={{width: "fit-content"}}>
            {plants.map(plant => (
               <PlantCard plant={setPlants.savedPlants} />
            ))}
        </div> */}
        </div>
      </div>
   )

};

export default Garden;