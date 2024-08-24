// const express = require("express");
// const users = require("./MOCK_DATA.json");


// const app = express();

// const PORT = 3000;


// // routes
// app.get("/users", (req, res) => {
//     const html = `
//     <ul>
//     ${user.map((user) => `<li>${user.first_name}</li>`).join("")}
//     </ul>`
//     res.send(html);
// });


// app.get("/api/users", (req, res) => {
//     res.json(users);
// })


// // find the id of the users;
// app.get("/api/users/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// });

// // Make a post 
// app.post("/api/users", (req, res) => {
//     // todo: create a new users 
//     res.json({ status: "pending" });
// });

// // make a patch
// app.patch("/api/users/:id", (req, res) => {
//     //todo: update the user with id;
//     res.json({ status: "pending" });
// })

// // How to Delete
// app.delete("/api/user/:id", (req, res) => {
//     //todo :Delete the user with the id;
//     res.json({ staus: "pendign" });
// })

// // listen post define and console the port number in terminal:
// app.listen(PORT, () => {
//     console.log(`Start the Server PORT ${PORT}`);
// })




// use to the route in the same path;
const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();

const PORT = 3000;

// Multliple routes in the same path;


app.route("/api/users/:id").get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
}).patch((req, res) => {
    // todo : updat the user data with the help id ;
    res.json(user)
}).delete((req, res) => {
    // to do delete the user with the help of the id;
    res.json(user);
})


app.get("/api/user", (req, res)=>{
    res.json(user);
})
app.listen(PORT, () => {
    console.log(`Started the server in the ${PORT}`);
})