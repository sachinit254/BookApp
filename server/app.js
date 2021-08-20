const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();


dotenv.config({ path: "./config.env" });
require("./db/mongodbcon");

app.use(express.json());
app.use(cors());


// we link the router files to make our route easy
app.use(require("./router/auth"));

const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`server runing at port ${PORT}`);
  });