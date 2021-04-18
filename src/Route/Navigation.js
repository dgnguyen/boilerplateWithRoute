import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Brocoli from "./Brocoli";

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route path="/brocoli" render={() => <Brocoli />} />
        <Route path="/" render={() => <Home />} />
      </Switch>
    </Router>
  );
};

export default Navigation;
