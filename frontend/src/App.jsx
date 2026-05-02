import { useState } from "react";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const predict = async (type) => {
    setLoading(true);
    setResult("");

    try {
      let data = {};

      if (type === "salary") data = { exp: Number(input) };
      if (type === "house") data = { area: Number(input) };
      if (type === "student") data = { hours: Number(input) };

      const res = await axios.post(
        `http://localhost:3000/api/${type}`,
        data
      );

      setResult(res.data.prediction);
    } catch (err) {
      setResult("Error ❌ API not working");
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Smart AI Predictor</h1>

      <div style={styles.card}>
        <input
          style={styles.input}
          placeholder="Enter value (exp / area / hours)"
          onChange={(e) => setInput(e.target.value)}
        />

        <div style={styles.buttonRow}>
          <button style={styles.btn} onClick={() => predict("salary")}>
            💰 Salary
          </button>

          <button style={styles.btn} onClick={() => predict("house")}>
            🏠 House
          </button>

          <button style={styles.btn} onClick={() => predict("student")}>
            📊 Student
          </button>
        </div>

        <div style={styles.resultBox}>
          {loading ? "Processing..." : result}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#0f172a",
    color: "white",
  },
  title: {
    marginBottom: 20,
    fontSize: "32px",
  },
  card: {
    background: "#1e293b",
    padding: 30,
    borderRadius: 15,
    width: "350px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    border: "none",
    outline: "none",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: 10,
  },
  btn: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
    background: "#38bdf8",
    fontWeight: "bold",
  },
  resultBox: {
    marginTop: 20,
    padding: 15,
    background: "#0f172a",
    borderRadius: 10,
    minHeight: 40,
  },
};

export default App;