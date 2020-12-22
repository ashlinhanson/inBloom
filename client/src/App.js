import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import './App.css';
import PlantsPage from "./pages/Garden";
import NewUser from "./pages/NewUser";

function App() {

const [user, setUser] = useState(null)
useEffect(() => {
  setUser(JSON.parse(sessionStorage.getItem('userData')))
}, [])
  return (
    <Router>
      <div>
        {/* <Nav /> */}

        {/*  if they're not logged in */}

       { !user&& <Switch> 
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
            <Home user={user}/>
          </Route>
          <Route exact path={"/plants"}>
            <PlantsPage />
          </Route>
          
          </Switch>}

      </div>
    </Router>
  );
}

export default App;
