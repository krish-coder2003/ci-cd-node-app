const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("CI/CD Deployment Successful! 🚀 Running from AWS EC2 using Docker & GitHub Actions");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
