import React, { useState, useEffect } from "react";
import Body from "../components/Body";
import Menu from "../components/Menu";
import Load from "../components/Load";

const PieApple = () => {
  const [loading, setLoading] = useState(true);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [slide, setSlide] = useState(false);

  const handleSlide = (value) => {
    if (value) {
      // open menu, show menu before tomate
      setToggleMenu(value);
      setTimeout(() => {
        setSlide(value);
      }, 500);
    } else {
      // hide menu, hide tomate before menu
      setSlide(value);
      setTimeout(() => {
        setToggleMenu(value);
      }, 500);
    }
  };

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
      <Menu toggleMenu={toggleMenu} setToggleMenu={handleSlide} slide={slide} />
      <Body toggleMenu={toggleMenu} page="pieapple" />
    </div>
  );
};
export default PieApple;
