import React, { useState, useEffect } from "react";
import gsap from "gsap";
import Navbar from "../components/Navbar";
import SearchCard from "../components/SearchCard";
import GardenCard from "../components/GardenCard";
import yourgarden from "../images/yourgarden.png";
import API from "../utils/API";

function Garden(props) {

     // State and setter for search results
   const [results, setResults] = useState([]);
   const [isSearching, setIsSearching] = useState(false);
   const [userGarden, setUserGarden] = useState(true);
   const [garden, setGarden] = useState([]);
   
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
         setGarden(results.data.Plants);
         setIsSearching(false);
         setUserGarden(true);
     });
   }



   
   console.log(results)

// gsap code for plant cards coming in from right 


useEffect(() => {

gsap.from('.plant-cards', {duration: 3, x:300, opacity:0})

},
[]);



   return (
      <div className="garden-body">
         <div className="jumbotron garden-jumbo">
            <img className="gardenHeader" src={yourgarden}></img>
         </div>
         <Navbar setResults={setResults} 
         results={results} 
         setIsSearching={setIsSearching} 
         setUserGarden={setUserGarden} 
         userGarden={userGarden} 
         handleGetPlants={handleGetPlants}
         user={props.user}
         setUser={props.setUser} /> 
         <div id="plant-cards" className="row p-3 mb-5">
        
        {/* trigger a modal with belows results that you can add to the garden */}

         {isSearching && results.map(result => (
                    
            <SearchCard key={result.id} plant={result} user={props.user.id} userGarden={userGarden} />
               
         ))}

      {/* this can show saved ones */}
      
      <div className="container" style={{width: "fit-content"}}>
            {garden.map(result => (
               <GardenCard key={result.id} plant={result} user={props.user.id} userGarden={userGarden} />
            ))}
        </div>
        </div>
      </div>
   )

};

export default Garden;