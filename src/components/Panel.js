import React, { useState, useEffect } from "react";
import "../App.scss";

const Panel = () => {
  const [delayTomate, setDelayTomate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDelayTomate(true);
    }, 1000);
  });
  console.log({ delayTomate });
  const classNameTomate = delayTomate ? "show" : "hide";
  return (
    <div className="panel">
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

        <div className={`tomate ${classNameTomate}`} />
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
  );
};
export default Panel;
