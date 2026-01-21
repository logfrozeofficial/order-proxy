const express = require("express");
const fetch = require("node-fetch");
const app = express();
app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxLf4j56zJ0nbRwMT9Lku3UvF1kR-h9d6s1VBHk0EVwYJ5IwGxHksk8bq1nf6IqRu2b/exec", {
      method: "POST",
      body: JSON.stringify(req.body),
    });
    const text = await response.text();
    res.send(text);
  } catch (err) {
    res.status(500).send("Proxy error: " + err.message);
  }
});

app.listen(3000, () => console.log("Proxy running"));
