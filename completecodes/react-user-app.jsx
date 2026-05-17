import React, { useState } from "react";

function App() {

  const [name, setName] = useState("");

  const currentDate = new Date().toLocaleDateString();

  return (
    <div style={{
      fontFamily: "Arial",
      textAlign: "center",
      marginTop: "100px"
    }}>

      <h1>React User App</h1>

      <h3>Current Date: {currentDate}</h3>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "10px",
          width: "250px"
        }}
      />

      <h2>Hello, {name}</h2>

    </div>
  );
}

export default App;
