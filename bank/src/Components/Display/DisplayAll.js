import React, { useState } from "react";
import db from "../../Auth/Firebase.config";

function DisplayAll() {
  const [dataToShow, setData] = useState([]);

  db.collection("Banking Info").onSnapshot(function (querySnapshot) {
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({
        name: doc.data().name,
        checking: doc.data().checking,
        savings: doc.data().savings,
      });
    });
    setData(data);
  });

  return (
    <div className="display-section">
      <h1 className="display-section-text">Display Section</h1>
      <h6 className="display-section-text">
        displays all current data entries
      </h6>
      <p className="display-section-text">
        {dataToShow.map(
          (data) =>
            "Name: " +
            data.name +
            "| Checking: " +
            data.checking +
            "| Savings: " +
            data.savings
        )}
      </p>
    </div>
  );
}

export default DisplayAll;
