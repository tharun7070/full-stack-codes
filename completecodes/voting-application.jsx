import React, { useState } from "react";

function App() {

  const [person1, setPerson1] = useState(0);
  const [person2, setPerson2] = useState(0);
  const [person3, setPerson3] = useState(0);

  let leader = "No Votes Yet";

  if (person1 > person2 && person1 > person3) {
    leader = "Person 1 is Leading";
  }
  else if (person2 > person1 && person2 > person3) {
    leader = "Person 2 is Leading";
  }
  else if (person3 > person1 && person3 > person2) {
    leader = "Person 3 is Leading";
  }
  else if (person1 !== 0 || person2 !== 0 || person3 !== 0) {
    leader = "Tie Between Candidates";
  }

  return (

    <div
      style={{
        background: "#f2f2f2",
        minHeight: "100vh",
        textAlign: "center",
        paddingTop: "30px"
      }}
    >

      <h1 style={{ color: "#333" }}>
        Voting Application
      </h1>

      <h2 style={{ color: "green" }}>
        {leader}
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px"
        }}
      >

        <div
          style={{
            background: "white",
            padding: "20px",
            width: "220px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px lightgray"
          }}
        >
          <h2>Person 1</h2>
          <h3>Votes: {person1}</h3>

          <button
            onClick={() => setPerson1(person1 + 1)}
            style={{
              padding: "10px 20px",
              background: "#4CAF50",
              color: "white",
              border: "none"
            }}
          >
            Vote
          </button>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            width: "220px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px lightgray"
          }}
        >
          <h2>Person 2</h2>
          <h3>Votes: {person2}</h3>

          <button
            onClick={() => setPerson2(person2 + 1)}
            style={{
              padding: "10px 20px",
              background: "#2196F3",
              color: "white",
              border: "none"
            }}
          >
            Vote
          </button>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            width: "220px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px lightgray"
          }}
        >
          <h2>Person 3</h2>
          <h3>Votes: {person3}</h3>

          <button
            onClick={() => setPerson3(person3 + 1)}
            style={{
              padding: "10px 20px",
              background: "#ff9800",
              color: "white",
              border: "none"
            }}
          >
            Vote
          </button>
        </div>

      </div>

    </div>
  );
}

export default App;
