import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Plans from "./components/TopPlansComponent/Plans";
import EMI from "./components/EMI";
import Login from "./components/Login";
import Register from "./components/Register";

// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "react-toastify/dist/ReactToastify.css";

import "./css/index.css";
import "./css/EMI.css";
import "./css/login.css";
import "./css/register.css";

function App() {
  let navHeroPlans = () => (
    <>
      <Nav />
      <Hero />
      <Plans />
    </>
  );
  return (
    <div>
      <Switch>
        <Route exact path="/" component={navHeroPlans} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/emiCalci" component={EMI} />
      </Switch>
    </div>
  );
}

export default App;
