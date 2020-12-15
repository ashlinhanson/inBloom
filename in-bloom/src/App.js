import React from "react";
import Home from "./pages/Home";
import './App.css';
import PlantsPage from "./pages/PlantsPage";

function App() {
  return (
    <Router>
      <div>
        <Nav />
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
