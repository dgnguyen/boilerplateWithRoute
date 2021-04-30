import React from "react";
import Body from "../components/Body";
import Menu from "../components/Menu";

const Brocolie =  () => {
  return (
    <div className="App">
      <div className="leftContainer">
        <Menu />
      </div>
      <div className="rightContainer brocoli">
        <Body page="brocoli" />
      </div>
    </div>
  );
};
export default Brocolie