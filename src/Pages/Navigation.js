import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Brocoli from "./Brocoli";
import Loading from "./Loading";

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route path="/loading" render={() => <Loading />} />
        <Route path="/brocoli" render={() => <Brocoli />} />
        {/* il faut que home soit toujours en bas */}
        <Route path="/" render={() => <Home />} />
      </Switch>
    </Router>
  );
};

export default Navigation;
