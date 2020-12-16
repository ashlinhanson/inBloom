import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import './App.css';
import PlantsPage from "./pages/Garden";
import NewUser from "./pages/NewUser";

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/plants"}>
            <PlantsPage />
          </Route>
          <Route exact path={"/newuser"}>
            <NewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
