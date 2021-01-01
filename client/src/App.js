import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import './App.css';
import PlantsPage from "./pages/Garden";
import NewUser from "./pages/NewUser";

function App() {

const [user, setUser] = useState(null)
useEffect(() => {
  setUser(JSON.parse(sessionStorage.getItem('userData')))
}, [])

console.log(user)
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        {/* <nav>
          <ul>
            <li className='nav-item'>
              <Link to="/">Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="/plants">Plants</Link>
            </li>
            <li className='nav-item'>
              <Link to="/newuser">Users</Link>
            </li>
          </ul>
        </nav> */}


        {/*  if they're not logged in */}
        
       { !user && <Switch> 
          <Route exact path={"/"}>
            <Home setUser={setUser} user={user}/>
          </Route>
          <Route exact path={"/newuser"}>
            <NewUser />
          </Route>
        </Switch>}

        {/* if they're logged in they can access this */}

        {user && <Switch>
          <Route exact path={"/"}>
            {/* <Home user={user}/> */}
            <PlantsPage setUser={setUser} user={user}/>
            {/* <Link to="/plants">Plants</Link> */}
          </Route>
          {/* <Route exact path={"/plants"}>
            <PlantsPage setUser={setUser} user={user}/>
          </Route> */}
          
          </Switch>}

      </div>
    </Router>
  );
}

export default App;
