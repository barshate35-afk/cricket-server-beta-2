const express = require("express");
const fetch = require("node-fetch");
const app = express();

const API_KEY = "c5d69679-c2a3-48b5-a935-f7a2a2e52a6a";

app.get("/live", async (req, res) => {
  try {
    const r = await fetch(`https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`);
    const data = await r.json();
    res.json(data);
  } catch (e) {
    res.json({ error: "API error" });
  }
});

app.listen(process.env.PORT || 3000);
