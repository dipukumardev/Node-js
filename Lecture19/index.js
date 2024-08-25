const express = require("express");
const fs = require("fs");
const { type } = require("os");
const { default: mongoose } = require("mongoose");
const userRouter = require("./routes/user")
const { connectMongoDb } = require('./connection');
const app = express();
const PORT = 3000;
// conndection;
connectMongoDb("mongodb://127.0.0.1:27017/Myfirstdatabase").then(()=>console.log("Mongodb Connected!"));
// middlewar
app.use(express.json());
// use user router files;
app.use("/api/users", userRouter);
// listen the port code
app.listen(PORT, () => {
    console.log(`Server start PORT ${PORT}`);
})

