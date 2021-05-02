import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";


const Body = ({ page, history, toggleMenu }) => {
  const classRightContainer = toggleMenu ? "collapsed" : "expanded";
  return (
    <div className={`rightContainer ${classRightContainer}`}>
      <Header/>

      <div className={`bigBg ${page}`}>
      </div>
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
            fontSize: "100px",
            fontFamily: "Acumin Pro",
          }}
        >
          {page === "pieapple" ? 1 : 2}{" "}
          <span
            style={{
              color: "#375238",
              fontSize: "30px",
              fontFamily: "Acumin Pro",
            }}
          >
            / 2
          </span>
        </div>

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
     
    </div>
  );
};

export default withRouter(Body);
