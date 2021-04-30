import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group"
import Home from "./Home";
import Tomate from "./Tomate";
import Brocoli from "./Brocoli";
import Loading from "./Loading";


const Navigation = () => {
 
  return (
    <TransitionGroup>
      <CSSTransition >
        <Router>
          <Switch>
          <Route path="/loading" render={() => <Loading />} />  
            <Route path="/tomate" render={() => <Tomate />} />
            <Route path="/brocoli" render={() => <Brocoli />} />
        
            {/* il faut que home soit toujours en bas */}
            <Route path="/" render={() => <Home />} />
          </Switch>
        </Router>
    </CSSTransition>
    </TransitionGroup>
  );

};


export default Navigation;
