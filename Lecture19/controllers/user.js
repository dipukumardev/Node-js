const User = require("../models/user")


async function handleGetAllUsers(req, res) {
    const alldbusers = await User.find({});
    res.json(alldbusers);
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id);
    res.json(user);
}


async function handleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
    res.json({ status: "Success" });
}

async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id);
    res.json({ status: "Success" });
}


async function handleCreatNewUser(req,res)
{
    const body = req.body;
    if (
        !body ||
        !body.firstName ||
        !body.lastName ||
        !body.email ||
        !body.Jobtitle ||
        !body.Gender
    ) {
        return res.status(400).json({ massage: "All fields are req...." });
    }

    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        Jobtitle: body.Jobtitle,
        Gender: body.Gender
    });
    // console.log("Result", result);
    return res.status(201).json({ mas: "Success",id:result._id});
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreatNewUser
}