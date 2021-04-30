import React from "react";
import Body from "../components/Body";
import Menu from "../components/Menu";

const Home = ({ page, togglePage }) => {
  return (
    <div className="App">
      <div className="leftContainer">
        <Menu />
      </div>
      <div className="rightContainer pieapple">
        <Body page="pieapple" />
      </div>
    </div>
  );
};
export default  Home