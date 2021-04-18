import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Menu from "../components/Menu";

export default () => {
  return (
    <div className="App">
      <div className="leftContainer">
        <Menu />
      </div>
      <div className="rightContainer brocoli">
        <Header />
        <Body page="brocoli" />
      </div>
    </div>
  );
};
