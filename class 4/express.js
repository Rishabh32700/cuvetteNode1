const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const users = require("./MOCK_DATA.json");

app.use(express.urlencoded({ extended: false }));

// const allowedOrigns = [
//   "http://localhost:5173",
//   "http://127.0.0.1:5500/class%204/index.html",
// ];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigns.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("not allowed because of CORS policy"));
//     }
//   },
// };

// app.use(cors(corsOptions));

app.use(cors());
// app.use(cors({ origin: '*' }));

// app.get("/api/users", );
// app.post("api/users", );
// dynamic path parameters
// app.get("/api/users/:id", );
// app.patch("api/users/:id", );
// app.delete("api/users/:id", );

const basePath = "/api/users";

app
  .route(basePath)
  .get((req, res) => {
    res.statusCode = 200;
    // db queries
    console.log(req.headers);

    res.setHeader("X-myName", "rishabh");
    return res.send(users);
  })
  .post((req, res) => {
    // some logic

    if (
      !req.body ||
      !req.body.first_name ||
      !req.body.last_name ||
      !req.body.email ||
      !req.body.gender
    ) {

      return res.status(400).json({message:"invalid req something is missing"})
    }

    users.push({ ...req.body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      if (err) {
        console.log(err);
      } else {
        return res.status(202).json({ status: "user created successfully" });
      }
    });
  });

app
  .route(`${basePath}/:id`)
  .get((req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id == id);
    return res.json(user);
  })
  .patch((req, res) => {
    // some logic
    return res.json({ status: "failed" });
  })
  .delete((req, res) => {
    // some logic
    const id = req.params.id;

    const userIdx = users.findIndex((user) => user.id == id);
    const user = users.splice(userIdx, 1);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      if (err) {
        console.log(err);
      } else {
        return res.json({
          status: `user with id ${user.id} Deleted successfully`,
        });
      }
    });
  });

app.listen(8000);
