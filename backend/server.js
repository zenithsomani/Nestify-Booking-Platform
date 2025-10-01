import express from "express";
import dotenv from "dotenv";
dotenv.config();

import listings from "./data/listings.js ";
const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.get("/api/listings", (req, res) => {
  res.json(listings);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
