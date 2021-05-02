import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PieApple from "./PieApple";
import Brocoli from "./Brocoli";


const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route path="/brocoli" render={() => <Brocoli />} />
<<<<<<< HEAD
=======
        {/* il faut que home soit toujours en bas */}
>>>>>>> origin
        <Route path="/" render={() => <PieApple />} />
      </Switch>
    </Router>
  );
};

export default Navigation;
