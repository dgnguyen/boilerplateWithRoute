import React from "react";
import "../App.scss";

const Panel = ({ slide, toggleMenu }) => {
  const classNameTomate = toggleMenu ? "show" : "hide";
  const cleanTomate = slide ? "slideIn" : "slideOut";
  return (
    <div className={`menuExpanded ${classNameTomate}`}>
      <div className="panel">
        <div className="slideTomate">
          <div className={`tomate ${cleanTomate}`} />
        </div>
        <div className="row">
          <div className="subMenu">
            <ul>
              <li>
                <div className="hyphen" />
                <h1> Our product</h1>
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
        </div>

        <div className="row">
          <div className="subMenu">
            <ul>
              <li>
                <div className="hyphen" />
                <h1> Our product</h1>
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
        </div>

        <div className="row">
          <div className="subMenu">
            <ul>
              <li>
                <div className="hyphen" />
                <h1> Our Vision</h1>
              </li>
            </ul>
          </div>
          <div className="subMenu1">
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
        </div>
        <div className="row">
          <div className="subMenu">
            <ul>
              <li>
                <div className="hyphen" />
                <h1> Contact us</h1>
              </li>
            </ul>
          </div>
          <div className="subMenu2">
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
        </div>
      </div>
    </div>
  );
};
export default Panel;
