import React from "react";
import { withRouter } from "react-router-dom";
import Panel from "../components/Panel";

const Menu = ({ toggleMenu, setToggleMenu, slide }) => {
  const btnMenu = toggleMenu ? "btn-close" : "btn-menu";
  const classLeftContainer = toggleMenu ? "expanded" : "collpased";
  return (
    <div className={`leftContainer ${classLeftContainer}`}>
      <div className="menuCollapsed">
        <div className="logo"></div>
        <div className="panier"></div>
        <div className="hyphen-ver"></div>
        <div className={btnMenu} onClick={() => setToggleMenu(!slide)}></div>
        <div className="hyphen-ver"></div>
        <div className="search"></div>
        <div className="orgabit">
          <span style={{ color: "#FBD848" }}>ORGA</span>
          <span style={{ color: "#39553A" }}>BITS</span>
        </div>
      </div>
      <Panel slide={slide} toggleMenu={toggleMenu} />
    </div>
  );
};

export default withRouter(Menu);
