const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const users = require("./MOCK_DATA.json");
const mongoose = require("mongoose");
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

mongoose
  .connect("mongodb://127.0.0.1:27017/cuvetteNodeDB")
  .then(() => {
    console.log("db connected!!!");
  })
  .catch((err) => {
    console.log("error===>", err);
  });

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
  },
});

const UserModel = mongoose.model("user", userSchema);

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
  .get( async (req, res) => {
    
    const allUsers = await UserModel.find()
    // db queries

    res.setHeader("X-myName", "rishabh");
    return res.send(allUsers);
  })
  .post(async (req, res) => {
    // some logic
    if (
      !req.body ||
      !req.body.first_name ||
      !req.body.email ||
      !req.body.gender
    ) {
      return res
        .status(400)
        .json({ message: "invalid req something is missing" });
    }

    try{
      const result =  await UserModel.create({
        first_name: req.body.first_name,
        last_name : req.body.last_name ? req.body.last_name : null ,
        email: req.body.email,
        gender: req.body.gender
      })
      console.log(result);
      
      return res.status(200).json({msg:"Created Successfully !!!"});

    }catch{
      return res.status(400).json({msg:"somethg is missing"});
    }

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
  .delete(async (req, res) => {

    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id)

    return res.status(200).json({ status: "Deleted !!!" });

  });

app.listen(8000);
