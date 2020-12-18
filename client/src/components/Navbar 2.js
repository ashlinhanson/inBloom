import React, { useEffect } from 'react';
import { gsap, TimelineLite, Power3 } from 'gsap';
import Logout from './Logout';

function Navbar() {

    const [searchState, setSearchState] = useState({
      plantName : " ",
      searchResults : []
    })


    let tl = new TimelineLite({ delay: 0.8 })

    useEffect(() => {

        tl.from('.homes', { x: 15, opacity: 0, ease: Power3.easeOut, delay: 0.1 }, 'Start')
        tl.from('.search', { x: 15, opacity: 0, ease: Power3.easeOut, delay: 0.2 }, 'Start')
        tl.from('.contact', { x: 15, opacity: 0, ease: Power3.easeOut, delay: 0.3 }, 'Start')
    }, []);

    function handleFormSubmit() {
      API.searchPlantByName(searchState.plantName, (result, err) => {
        if (!err) {
          const searchResults = result.map((plant) => {
            <option value={plant.plantName}></option>
          })
        }
      })

    };


    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-n5">
        <a className="navbar-brand homes text-success" href="#">inBloom</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active search">
            <form class="form-inline">
                <div class="form-group mx-sm-3 mb-2">
                  <label for="plantSearch" class="sr-only">Search : </label>
                  <input type="search" class="form-control" id="plantSearch" placeholder="Search by plant name..."/>
                </div>
                <button 
                  type="submit" 
                  class="btn btn-success mb-2 mx-4"
                  onClick={handleFormSubmit}
                  >
                    Search Plants
                </button>
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
