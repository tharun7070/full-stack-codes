import React, { useState } from "react";

function App() {

  const [status, setStatus] = useState(false);

  function toggleButton() {
    setStatus(!status);
  }

  return (

    <div
      style={{
        backgroundColor: status ? "lightgreen" : "lightcoral",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >

      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "10px",
          textAlign: "center",
          width: "250px"
        }}
      >

        <h1>
          {status ? "ON" : "OFF"}
        </h1>

        <button
          onClick={toggleButton}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Toggle
        </button>

      </div>

    </div>
  );
}

export default App;
