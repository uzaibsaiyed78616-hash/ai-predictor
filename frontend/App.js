import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const predict = async (type) => {
    let data = {};

    if (type === "salary") data = { exp: Number(input) };
    if (type === "house") data = { area: Number(input) };
    if (type === "student") data = { hours: Number(input) };

    const res = await axios.post(`http://localhost:3000/api/${type}`, data);
    setResult(res.data.prediction);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Smart AI Predictor</h1>

      <input
        placeholder="Enter value"
        onChange={(e) => setInput(e.target.value)}
      />

      <br /><br />

      <button onClick={() => predict("salary")}>Salary</button>
      <button onClick={() => predict("house")}>House</button>
      <button onClick={() => predict("student")}>Student</button>

      <h2>Prediction: {result}</h2>
    </div>
  );
}