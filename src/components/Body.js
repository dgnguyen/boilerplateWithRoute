import React from "react";
import { withRouter } from "react-router-dom";
// import Loading from "../Pages/Loading"

const Body = ({ page, history, toggleMenu }) => {
  const classRightContainer = toggleMenu ? "collapsed" : "expanded";

  return (
    <div className={`rightContainer ${classRightContainer}`}>
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

      <div className={`bigBg ${page}`} />
      <div className={`titleContainer`}>
        <div className="title">
          <span style={{ color: "#FBD848" }}>Our fruit & vegetables are</span>{" "}
          <span style={{ color: "#39553A" }}> organic.</span>
        </div>
        <div className="subtitle">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>

        <div className="btn">DISCOVER &#9656;</div>
      </div>

      <div className="pagination">
        <div
          className="pageNumber"
          style={{
            color: "#F1D145",
            fontSize: "70px",
            fontFamily: "Acumin Pro",
          }}>
          {page === "pieapple" ? 1 : 2}{" "}
        </div>
        <span
          style={{
            color: "#375238",
            fontSize: "30px",
            fontFamily: "Acumin Pro",
          }} > / 2</span>

        <div className="thumbContainer">
          <div className={`thumbnail ${page}`}></div>

          <div
            className="togglePage"
            onClick={() =>
              page === "pieapple" ? history.push("/brocoli") : history.push("/")
            }
          >
            &#9656;
          </div>
        </div>
      </div>
      {/* <div>
      <Loading page="loading" />
      </div> */}
    </div>
  );
};

export default withRouter(Body);
