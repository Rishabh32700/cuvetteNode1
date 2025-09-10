const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routers/user");
const { dbConnaction } = require("./connection");

dbConnaction()
  .then(() => {
    console.log("db connected!!!");
  })
  .catch((err) => {
    console.log("error===>", err);
  });

app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use("/api/users", router);
app.listen(8000);
