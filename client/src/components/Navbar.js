import React, { useState, useEffect } from 'react';
import useDebounce from "./use-debounce";
import { gsap, TimelineLite, Power3 } from 'gsap';
import Logout from './Logout';
import API from '../utils/API';
import Button from "../components/Button";
import e from 'cors';

function Navbar(props) {

  // State and setter for search term
  const [searchTerm, setSearchTerm] = useState('');
  
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
      // Make sure we have a value (user has entered something in input)
      if (debouncedSearchTerm) {
        // Set isSearching state
        props.setIsSearching(true);
        props.setUserGarden(true);
        // Fire off our API call
        API.searchPlants(plantName).then(results => {
          // Set back to false since request finished
          props.setIsSearching(true);
          // Set results state
          props.setResults(results.data);
          // props.setIsSearching(false);
          props.setUserGarden(false);
        
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
  
  function getSearchTerm (e){
    e.preventDefault();
    setSearchTerm(e.target.value)
  }

  let tl = new TimelineLite({ delay: 0.8 })

  useEffect(() => {
    tl.from('.homes', { x: 15, opacity: 0, ease: Power3.easeOut, delay: 0.1 }, 'Start')
    tl.from('.search', { x: 15, opacity: 0, ease: Power3.easeOut, delay: 0.2 }, 'Start')
    tl.from('.contact', { x: 15, opacity: 0, ease: Power3.easeOut, delay: 0.3 }, 'Start')
  }, []);

  return (
    <div>
      <nav id="navbar" className="navbar navbar-light bg-light mt-n5">
        <div className="justify-content-left">
          <a id="navbar-title" className="navbar-brand homes text-success">inBloom</a>
          {!props.userGarden && <button id="back-to-garden-btn" className="btn" onClick={props.handleGetPlants}>Back to Garden</button>}
        </div> 
        <div className="navbar justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active search">
              <form className="form-inline" onSubmit={e}>
                <div className="form-group mx-sm-3 mb-2">
                  <label htmlFor="plantSearch" className="sr-only">Search : </label>
                  <input type="search" className="form-control" id="plantSearch" placeholder="Search by plant name..." onChange={e => getSearchTerm(e)}/>
                  {props.isSearching && <div> Searching... </div>}
                
                </div>
                <li className="nav-item contact">
                  <Logout
                  user={props.user}
                  setUser={props.setUser}
                  />
                </li>
              </form>
            </li>
          </ul>
        </div>
      </nav>
  
      {props.isSearching &&
        <div className="mx-auto text-center sublead">    
        <h1><b>Search Results</b></h1>
        </div>
      }
    </div>
  )
};

export default Navbar;
