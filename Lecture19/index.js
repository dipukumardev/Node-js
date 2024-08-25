const express = require("express");
const mongoosh = require("mongoose");
const fs = require("fs");
const { type } = require("os");
const { default: mongoose } = require("mongoose");
const app = express();

const PORT = 3000;


// middlewar
app.use(express.json());

// Connection of Mongoosh

mongoose.connect('mongodb://127.0.0.1:27017/Myfirstdatabase').then(() => console.log("MongoDB Connected")).catch((err) => console.log("mongo Errro", err));

// Schema
const schema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,

    },
    email: {
        type: String,

        unique: true
    },
    Jobtitle: {
        type: String,

    },
    Gender: {
        type: String,

    }
}, { timestamps: true });

// creata a model
const User = mongoose.model('User', schema);


// how to data get from the mongobd in the brosers;
app.get("/users", async (req, res) => {
    const alldbusers = await User.find({});
    const html = `
    <ul>
    ${alldbusers.map((user) => `<li>${user.firstName}- ${user.email}</li>`).join("")}
    </ul>`
    res.send(html);
});


// All users find  in the database ;
app.get("/api/users", async(req, res)=>{
    const  alldbusers = await User.find({});
    res.json(alldbusers);
})


//  find the user throught the id;
app.get("/api/users/:id", async(req, res)=>{
    const user = await User.findById(req.params.id);
    res.json(user);
})

// how to update the user in the database;
app.patch("/api/users/:id", async(req, res)=>{
    await User.findOneAndUpdate(req.params.id,{lastName:"Changed"});
    res.json({status:"success"});
})

// Make a post request to add the data in the data base;
app.post("/api/users", async (req, res) => {
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
    return res.status(201).json({ mas: "Success" });
});


app.post("/", (req, res) => {
    console.log(req.body);
    res.send(req.body);
})



app.listen(PORT, () => {
    console.log(`Server start PORT ${PORT}`);
})
