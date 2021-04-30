import React from "react";
import { CSSTransition } from "react-transition-group";

import Panel from "../components/Panel";
import Menu from "../components/Menu";

const Tomate = () => {
  return (
    <div className="App">
      <div className="leftContainer">
        <Menu />
      </div>
      <CSSTransition in timeout={3000} onExited={() => console.log("exit")}>
        <div className="rightContainer tomate">
          <Panel page="tomate" />
        </div>
      </CSSTransition>
    </div>
  );
};
export default Tomate;
