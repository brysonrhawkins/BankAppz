import React, { useState, useEffect } from "react";
import db from "../../Auth/Firebase.config";

function CreateQuery() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const unsubscribe = db
      .collection("Banking Info")
      .where("name", "==", inputValue)
      .onSnapshot((querySnapshot) => {
        const documents = [];
        querySnapshot.forEach((doc) => {
          documents.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setData(documents);
      });
    return unsubscribe;
  }, [inputValue]);

  return (
    <div>
      <h1>Enter Search: </h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <br />
      <br />
      <h2>Database Search Results:</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name}, {item.checking}, {item.savings}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CreateQuery;
