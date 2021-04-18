import React from "react";
import { withRouter } from "react-router-dom";

const Body = ({ page, history }) => {
  return (
    <div className="body">
      <div className={`bigBg ${page}`} />
      <div className={`titleContainer`}>
        <div className="title">
          <span style={{ color: "#FBD848" }}>our fruit & vegetables</span>{" "}
          <span style={{ color: "#39553A" }}>are organic</span>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </div>
        <div className="button">Decouvrir</div>
      </div>
      <div className="pagination">
        <div className="pageNumber">{page === "pieapple" ? 1 : 2} / 2</div>
        <div className="thumbContainer">
          <div className={`thumbnail ${page}`}></div>
          <div
            className="togglePage"
            onClick={() =>
              page === "pieapple" ? history.push("/brocoli") : history.push("/")
            }
          ></div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Body);
