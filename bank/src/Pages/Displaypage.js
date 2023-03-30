import React from "react";
import DisplayAll from "../Components/Display/DisplayAll";
import Header from "../Components/Header/Header";

function Display() {
  return (
    <div>
      <Header />
      <br />
      <br />
      <div>
        <h1>Display All Page: </h1>
        <br />
        <DisplayAll />
      </div>
    </div>
  );
}

export default Display;
