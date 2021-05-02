import React from "react";
import "../App.scss";

const Header =  () => (
  <div className="header">
    <div className="subMenu">
      <ul>
        <li>
          <div className="hyphen" />
         <h1>Our product</h1> 
        </li>
      </ul>
    </div>
    <div className="subMenu">
      <ul>
        <li>
          <div className="hyphen" />
          pinapples
        </li>
        <li>
          <div className="hyphen" />
          pinapples
        </li>
        <li>
          <div className="hyphen" />
          pinapples
        </li>
        <li>
          <div className="hyphen" />
          pinapples
        </li>
      </ul>
    </div>
    <div className="subMenu">
      <ul>
        <li>
          <div className="hyphen" />
          Cauliflowers
        </li>
        <li>
          <div className="hyphen" />
          Cauliflowers
        </li>
        <li>
          <div className="hyphen" />
          Cauliflowers
        </li>
        <li>
          <div className="hyphen" />
          pinapples
        </li>
      </ul>
    </div>
    <div className="socialIcons">
        <div className="twitter"></div>
        <div className="youtube"></div>
        <div className="instagram"></div>
        <div className="facebook"></div>
       
    </div>
  </div>
);
export default Header