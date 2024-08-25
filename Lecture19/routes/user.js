const express = require("express");
const { handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreatNewUser } = require("../controllers/user");
const rourter = express.Router();


// All users find  in the database ;
rourter.route("/").get(handleGetAllUsers).post(handleCreatNewUser);

rourter.get("/:id", handleGetUserById);

rourter.patch("/:id", handleUpdateUserById);

rourter.delete("/:id", handleDeleteUserById);

rourter.post("/:d", handleCreatNewUser);



// app.post("/", (req, res) => {
//     console.log(req.body);
//     res.send(req.body);
// });


module.exports = rourter;