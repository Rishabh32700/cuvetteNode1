const UserModel = require("../model/user");

async function getAllUsers(req, res) {
  const allUsers = await UserModel.find();
  res.setHeader("X-myName", "rishabh");
  return res.send(allUsers);
}

async function createUser(req, res) {
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
  try {
    const result = await UserModel.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name ? req.body.last_name : null,
      email: req.body.email,
      gender: req.body.gender,
    });
    console.log(result);

    return res.status(200).json({ msg: "Created Successfully !!!" });
  } catch {
    return res.status(400).json({ msg: "somethg is missing" });
  }
}

async function getUserById(req, res) {
  const id = req.params.id;
  const user = users.find((user) => user.id == id);
  return res.json(user);
}

async function updateUserById(req, res) {
  return res.json({ status: "failed" });
}

async function deleteUserById(req, res) {
  const id = req.params.id;
  const user = await UserModel.findByIdAndDelete(id);
  return res.status(200).json({ status: "your bal is 10000000 $" });
}

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
