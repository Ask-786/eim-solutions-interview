const express = require("express");
const app = express();

const dbConn = require("./config/database");

require("dotenv").config();
dbConn();

const router = require("./routes/router");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("", (req, res) => [res.json({ status: true })]);

app.use("", router);

app.listen(2000);
