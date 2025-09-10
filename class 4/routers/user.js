const express = require("express");
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controller/user");

const router = express.Router();

router.get("/", getAllUsers);

router.post("/", createUser);

router
  .route(`/:id`)
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

module.exports = router;
