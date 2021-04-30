import React from "react";

import Panel from "../components/Panel";
import Menu from "../components/Menu";

const Tomate =  () => {
  return (
    <div className="App">
      <div className="leftContainer">
        <Menu />
      </div>
      <div className="rightContainer tomate">
        <Panel page="tomate" />
      </div>
    </div>
  );
};
export default Tomate