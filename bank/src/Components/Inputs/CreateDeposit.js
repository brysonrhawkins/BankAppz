import React, { useState } from "react";
import db from "../../Auth/Firebase.config";

function CreateDeposit() {
  const [name, setName] = useState("");
  const [checking, setChecking] = useState(null);
  const [savings, setSavings] = useState(null);
  const [returno, setReturn] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    db.collection("Banking Info").add({
      name: name,
      checking: checking,
      savings: savings,
      returno: returno,
    });

    setName("");
    setChecking(null);
    setSavings(null);
    setReturn(null);
  };

  return (
      <div>
        <h2>Deposit Form:</h2>
        <div className="create-post">
          <div className="form">
            <form className="login-form">
              <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="number"
                placeholder="checking"
                value={checking}
                onChange={(e) => setChecking(e.target.value)}
              />
              <input
                type="number"
                className="description"
                placeholder="savings"
                maxLength={50}
                size={20}
                value={savings}
                onChange={(e) => setSavings(e.target.value)}
              />
               <input
                type="number"
                className="description"
                placeholder="return"
                maxLength={50}
                size={20}
                value={returno}
                onChange={(e) => setReturn(e.target.value)}
              />
              <button onClick={submit}>Submit Your Deposit</button>
            </form>
          </div>
        </div>
      </div>
  );
}

export default CreateDeposit;
