import React from "react";
import Load from "../components/Load";

const Loading = () => {
  return (
    <div className="App">
      <div className="rightContainer loading">
        <Load page="loading" />
      </div>
    </div>
  );
};
export default Loading