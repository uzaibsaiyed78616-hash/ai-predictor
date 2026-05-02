const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Flask base URL
const FLASK_URL = "http://127.0.0.1:5000";

/* ---------------- SALARY PREDICTION ---------------- */
app.post("/api/salary", async (req, res) => {
    try {
        const response = await axios.post(`${FLASK_URL}/salary`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Salary prediction failed" });
    }
});

/* ---------------- HOUSE PREDICTION ---------------- */
app.post("/api/house", async (req, res) => {
    try {
        const response = await axios.post(`${FLASK_URL}/house`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "House prediction failed" });
    }
});

/* ---------------- STUDENT PREDICTION ---------------- */
app.post("/api/student", async (req, res) => {
    try {
        const response = await axios.post(`${FLASK_URL}/student`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Student prediction failed" });
    }
});

// Server start
app.listen(3000, () => {
    console.log("Backend running on http://localhost:3000");
});