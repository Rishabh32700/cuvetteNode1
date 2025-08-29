const express = require("express");
const cors = require("cors");
const app = express();
const users = require("./MOCK_DATA.json");

const allowedOrigns = [
  "http://localhost:5173",
  "http://127.0.0.1:5500/class%204/index.html",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigns.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("not allowed because of CORS policy"));
    }
  },
};

app.use(cors(corsOptions))

app.get("/api/users", (req, res) => {
  res.statusCode = 200;
  // db queries
  return res.send(users);
});

app.listen(8000);
