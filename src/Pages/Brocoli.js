import React, { useState, useEffect } from "react";
import Body from "../components/Body";
import Menu from "../components/Menu";
import Load from "../components/Load";

const Brocoli = () => {
  const [loading, setLoading] = useState(true);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return loading ? (
    <div className="loadingContainer">
      <Load />
    </div>
  ) : (
    <div className="App">
      <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Body toggleMenu={toggleMenu} page="brocoli" />
    </div>
  );
};
export default Brocoli;
