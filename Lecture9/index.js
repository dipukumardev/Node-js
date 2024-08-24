const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello form the Home page");
})
app.get("/about", (req, res) => {
    res.send("Hello form the about page");
})


app.listen(port, () => {
    console.log("Server is started:")
})