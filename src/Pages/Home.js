import React, { useState } from "react";
import Body from "../components/Body";
import Menu from "../components/Menu";
import Panel from "../components/Panel";

const Home = ({ page, togglePage }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="App">
      <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Body toggleMenu={toggleMenu} page="pieapple" />
      {/* {toggleMenu && <Panel />} */}
    </div>
  );
};
export default Home;
