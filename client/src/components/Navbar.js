import React, { useState, useEffect } from 'react';
import useDebounce from "./use-debounce";
import { gsap, TimelineLite, Power3 } from 'gsap';
import Logout from './Logout';
import API from '../utils/API';

function Navbar(props) {

    // const [searchState, setSearchState] = useState({
    //   plantName : " ",
    //   searchResults : []
    // })
    // State and setter for search term
    const [searchTerm, setSearchTerm] = useState('');
  
    // State for search status (whether there is a pending API request)
    const [isSearching, setIsSearching] = useState(false);

    // Now we call our hook, passing in the current searchTerm value.
    // The hook will only return the latest value (what we passed in) ...
    // ... if it's been more than 500ms since it was last called.
    // Otherwise, it will return the previous value of searchTerm.
    // The goal is to only have the API call fire when user stops typing ...
    // ... so that we aren't hitting our API rapidly.
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    // Here's where the API call happens
    // We use useEffect since this is an asynchronous action
    useEffect(
      () => {
        const plantName = debouncedSearchTerm;
        console.log("PLANT NAME" + plantName)
        // Make sure we have a value (user has entered something in input)
        if (debouncedSearchTerm) {
          console.log("STUPID RESULTS" + debouncedSearchTerm);
          // Set isSearching state
          setIsSearching(true);
          // Fire off our API call
          API.searchPlants(plantName).then(results => {
            // Set back to false since request finished
            setIsSearching(false);
            // Set results state
            console.log(results.data)
            props.setResults(results.data);
            props.setIsSearching(true);
          });
        } else {
          props.setResults([]);
        }

      },
      // This is the useEffect input array
      // Our useEffect function will only execute if this value changes ...
      // ... and thanks to our hook it will only change if the original ...
      // value (searchTerm) hasn't changed for more than 500ms.
      [debouncedSearchTerm]
    );


    let tl = new TimelineLite({ delay: 0.8 })

    useEffect(() => {

        tl.from('.homes', { x: 15, opacity: 0, ease: Power3.easeOut, delay: 0.1 }, 'Start')
        tl.from('.search', { x: 15, opacity: 0, ease: Power3.easeOut, delay: 0.2 }, 'Start')
        tl.from('.contact', { x: 15, opacity: 0, ease: Power3.easeOut, delay: 0.3 }, 'Start')
    }, []);

    // function handleFormSubmit() {
    //   API.searchPlants(searchState.plantName, (result, err) => {
    //     if (!err) {
    //       const searchResults = result.map((plant) => {
    //         <option value={plant.plantName}></option>
    //       })
    //     }
    //   })

    // };


    return (

      <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light mt-n5">
        <a id="navbar-title" className="navbar-brand homes text-success" href="#">inBloom</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active search">
            <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                  <label htmlFor="plantSearch" className="sr-only">Search : </label>
                  <input type="search" className="form-control" id="plantSearch" placeholder="Search by plant name..." onChange={e => setSearchTerm(e.target.value)}/>
                  {isSearching && <div>Searching...</div>}
                 
                </div>
                {/* <button 
                  type="submit" 
                  class="btn btn-success mb-2 mx-4"
                  // onClick={handleFormSubmit}
                  >
                    Search Plants
                </button> */}
            </form>
            </li>
            <li className="nav-item contact">
              <Logout />
            </li>
          </ul>
        </div>
      </nav>

    )
};

export default Navbar;
