const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
  <html>
  <head>
    <title>CI/CD Project - Node + Docker + AWS</title>
    <style>
      body {
        margin:0;
        font-family: Arial, Helvetica, sans-serif;
        background:#0f172a;
        color:white;
      }
      .banner {
        text-align:center;
        padding:40px;
        background:#111827;
        border-bottom:2px solid #2563eb;
      }
      .banner img {
        width:60%;
        border-radius:10px;
        box-shadow:0 0 15px rgba(0,0,0,0.5);
      }
      h1 {
        color:#38bdf8;
        font-size:40px;
      }
      .container {
        padding:40px;
        text-align:center;
      }
      .card {
        max-width:700px;
        margin:auto;
        background:#020617;
        padding:25px;
        border-radius:10px;
        box-shadow:0 0 15px rgba(0,0,0,0.6);
        border:1px solid #2563eb;
      }
      .highlight {
        color:#22c55e;
        font-weight:bold;
      }
    </style>
  </head>

  <body>

    <div class="banner">
      <img src="/my.png" />
    </div>

    <div class="container">
      <div class="card">
        <h1>🚀 CI/CD Automated Deployment Project</h1>
        <p>This project demonstrates a fully automated CI/CD pipeline using:</p>

        <p class="highlight">
          Node.js • Docker • DockerHub • GitHub Actions • AWS EC2
        </p>

        <p>
          Every time code is pushed to GitHub, it automatically builds a Docker image,
          pushes it to DockerHub, connects to AWS EC2 via SSH, pulls the new image,
          stops the old container and starts the new version. 
        </p>

        <h3>✨ Developer: Krishna Shrangare</h3>
        <p>Full-Stack & DevOps Enthusiast</p>
      </div>
    </div>

  </body>
  </html>
  `);
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
