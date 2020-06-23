const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dbService = require('./dbService')

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// create
app.post("/insert", (req, res) => {});
//read
app.get("/getAll", (req, res) => {
  const db = dbService.getDbServiceInstance();
  db.getAllData()
  res.json({success: true});
});
//update

//delete

app.listen(process.env.PORT, () => console.log("app is running"));
