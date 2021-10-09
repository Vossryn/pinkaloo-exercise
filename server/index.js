require("dotenv").config();
const express = require("express");
const path = require("path");
const axios = require("axios");

const port = process.env.SERVER_PORT || 4000;

const app = express();
app.use(express.json());

app.get("/api/endpoint", async (req, res) => {
  try {
    let { name = "", fields = "id,name,address,abstract", result = 20, page = 1 } = req.query;

    const response = await axios.get(`${process.env.API_URL}/search`, {
      params: { name, fields, result, page },
      headers: { "X-API-Key": process.env.API_KEY },
    });

    res.json({ data: response.data });
  } catch (error) {
    console.log(error);
  }
});

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
