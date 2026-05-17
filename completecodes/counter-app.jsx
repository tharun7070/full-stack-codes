import React, { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  return (

    <div
      style={{
        textAlign: "center",
        marginTop: "100px"
      }}
    >

      <h1>Counter: {count}</h1>

      <div>

        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: "10px 20px",
            marginRight: "15px",
            backgroundColor: "lightgreen",
            border: "none",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          style={{
            padding: "10px 20px",
            backgroundColor: "lightcoral",
            border: "none",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Decrement
        </button>

      </div>

    </div>
  );
}

export default App;
