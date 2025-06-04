import express from "express";
import axios from "axios";

const app = express();


app.get("/", (req, res) => {
  res.send("hello world");
});

const port = 4000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
