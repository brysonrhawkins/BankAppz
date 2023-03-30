import React from "react";
//importing router functionality, installed with npm i react-router react-router-dom.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//importing components, tabbed back to correct folder location.
import Homepage from "./Pages/Homepage.js";
import Displaypage from "./Pages/Displaypage.js";
import Depositpage from "./Pages/Depositpage.js";
import Querypage from "./Pages/Querypage.js";
import Projectionspage from "./Pages/Projectionspage.js";

//header was made at root of components, aka different import location.
import Header from "./Components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Home" element={<Homepage />} />
        <Route path="/Display" element={<Displaypage />} />
        <Route path="/Deposit" element={<Depositpage />} />
        <Route path="/Search" element={<Querypage />} />
        <Route path="/Projections" element={<Projectionspage />} />
      </Routes>
    </Router>
  );
}

export default App;

//routes are out URL pathways. Once weve linked components to our url, we can put that URL
//as an A tag and use it to navigate from our header -Bryson Hawkins
