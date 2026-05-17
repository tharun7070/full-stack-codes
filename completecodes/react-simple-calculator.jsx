import React, { useState } from "react";

function App() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  function add() {
    setResult(Number(num1) + Number(num2));
  }

  function subtract() {
    setResult(Number(num1) - Number(num2));
  }

  function multiply() {
    setResult(Number(num1) * Number(num2));
  }

  function divide() {
    setResult(Number(num1) / Number(num2));
  }

  return (

    <div
      style={{
        background: "#e6f0ff",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          width: "320px",
          textAlign: "center",
          boxShadow: "0px 0px 10px lightgray"
        }}
      >

        <h1 style={{ color: "#333" }}>
          Simple Calculator
        </h1>

        <input
          type="number"
          placeholder="Enter First Number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            marginBottom: "15px"
          }}
        />

        <input
          type="number"
          placeholder="Enter Second Number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            marginBottom: "20px"
          }}
        />

        <div>

          <button
            onClick={add}
            style={{
              padding: "10px",
              margin: "5px",
              width: "50px",
              background: "#4CAF50",
              color: "white",
              border: "none"
            }}
          >
            +
          </button>

          <button
            onClick={subtract}
            style={{
              padding: "10px",
              margin: "5px",
              width: "50px",
              background: "#f44336",
              color: "white",
              border: "none"
            }}
          >
            -
          </button>

          <button
            onClick={multiply}
            style={{
              padding: "10px",
              margin: "5px",
              width: "50px",
              background: "#2196F3",
              color: "white",
              border: "none"
            }}
          >
            *
          </button>

          <button
            onClick={divide}
            style={{
              padding: "10px",
              margin: "5px",
              width: "50px",
              background: "#ff9800",
              color: "white",
              border: "none"
            }}
          >
            /
          </button>

        </div>

        <h2 style={{ marginTop: "20px", color: "#444" }}>
          Result: {result}
        </h2>

      </div>

    </div>
  );
}

export default App;
