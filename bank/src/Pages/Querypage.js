import React from "react";
import Header from "../Components/Header/Header";
import CreateQuery from "../Components/Inputs/CreateQuery";

function Querypage() {
  return (
    <div>
      <Header />
      <br />
      <br />
      <h1>Search by name - case sensitive, must be exact</h1>
      <CreateQuery />
    </div>
  );
}

export default Querypage;
