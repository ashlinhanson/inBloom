import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import PlantCard from "../components/PlantCard";
import gardenHeader from "../images/Your-Garden.svg"
import API from "../utils/API";

function Garden(props) {

     // State and setter for search results
   const [results, setResults] = useState([]);
   const [isSearching, setIsSearching] = useState(false);
   
   useEffect(() => {
      console.log(props.user.id)
      // API.searchUserById(props.user.id)
      //    .then(res => {
      //       setResults(res.data.Plants)
      //    })
      handleGetPlants();
   }, [])
 
   const handleGetPlants = () => {
      API.searchUserById(props.user.id)
      .then(results => {
         setResults(results.data.Plants);
         setIsSearching(false);
     });
   }
   
   console.log(results)
   return (
      <div>
         <div className="jumbotron garden-jumbo">
            <img src={gardenHeader}></img>
         </div>
         <Navbar setResults={setResults} results={results} setIsSearching={setIsSearching} /> 
            {/* we'll want to re-style this button, this is just a placeholder for functionality */}
            {isSearching && <button onClick={handleGetPlants}>Back to Garden</button>}
         <div id="plant-cards" className="row p-3 mb-5">
        
        {/* trigger a modal with belows results that you can add to the garden */}

         {results.map(result => (
                    
            <PlantCard key={result.id} plant={result} user={props.user.id} isSearching={isSearching} />
               
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