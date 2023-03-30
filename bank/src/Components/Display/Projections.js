import React, { useState, useEffect } from "react";
import db from "../../Auth/Firebase.config";

function Projections() {
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
      <h1>Who do you want projections for?: </h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <br />
      <br />
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            Current Balance for {item.name}: Checking: {item.checking}, Savings: {item.savings}
          </li>
        ))}
      </ul>
      <br/>
      <br/>
      <h2>{data.map(documents =>('Calculated Projections over 12 months @ ' + (documents.returno * 100) + ' % Return'))}</h2>
      <h3>Not important will finish later - W.I.P. math works, super frickin ugly</h3>
      <table>
        <thead>
          <tr>
            <th>Checking</th>
            <th>Savings</th>
            <th>New Checking</th>
            <th>New Savings</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <div>
              <tr key={index.id}>
              <li>Month One</li>
                <td>{row.checking}</td>
                <td>{row.savings}</td>
                <br />
                <li> Month Two</li>
                <td>{row.checking * .04 + row.checking}</td>
                <td>{row.savings * .04 + row.savings}</td>
              </tr>
              <br />
              <tr key={index.id}>
                
                <td>{(row.checking * .04 + row.checking) * .04 + row.checking}</td>
                <td>{(row.savings * .04 + row.savings) * .04 + row.savings}</td>
                <br />

                <td>{row.checking}</td>
                <td>{row.savings}</td>
              </tr>
              <br />
              <tr key={index.id}>
                <td>{row.checking}</td>
                <td>{row.savings}</td>
                <br />

                <td>{row.checking}</td>
                <td>{row.savings}</td>
              </tr>
            </div>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Projections;
