import React from "react";
import { withRouter } from "react-router-dom";
import Panel from "../components/Panel";

const Menu = ({ history, toggleMenu, setToggleMenu }) => {
  const btnMenu = toggleMenu ? "btn-close" : "btn-menu";
  const classLeftContainer = toggleMenu ? "expanded" : "collpased";
  return (
    <div className={`leftContainer ${classLeftContainer}`}>
      <div className="menuCollapsed">
        <div className="logo"></div>
        <div className="panier"></div>
        <div className="hyphen-ver"></div>
        <div
          className={btnMenu}
          onClick={() => setToggleMenu(!toggleMenu)}
        ></div>
        <div className="hyphen-ver"></div>
        <div className="search"></div>
        <div className="orgabit">
          <span style={{ color: "#FBD848" }}>ORGA</span>
          <span style={{ color: "#39553A" }}>BITS</span>
        </div>
      </div>
      {toggleMenu && (
        <div className="menuExpanded">
          <Panel />
        </div>
      )}
    </div>
  );
};

export default withRouter(Menu);
