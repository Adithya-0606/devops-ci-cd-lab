const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("🚀 DevOps CI/CD Pipeline is Running!");
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        service: "devops-ci-cd-lab",
        timestamp: new Date()
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});