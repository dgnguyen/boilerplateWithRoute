import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PieApple from "./PieApple";
import Brocoli from "./Brocoli";
import Loading from "./Loading";

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route path="/loading" render={() => <Loading />} />
        <Route path="/brocoli" render={() => <Brocoli />} />
        <Route path="/" render={() => <PieApple />} />
      </Switch>
    </Router>
  );
};

export default Navigation;
