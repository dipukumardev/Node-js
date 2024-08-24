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
const fs = require("fs");
const app = express();

const PORT = 3000;
// midleware 
app.use(express.urlencoded({ extended: false }));

// make a second midleware;

app.use((req,res, next)=>{
    console.log("hello form the Middlewar");
    // res.json({massage:"Hello form the Middleware 1:"});
    next();
})


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



// Add a header 
app.get("/api/user", (req, res) => {
    res.setHeader("myname", "Dipu singh")
    res.json(users);
});



// delete the data from the database;
app.delete("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    console.log("Deleting request form ID:", id);
    const userindex = users.findIndex((user) => user.id === id);
    if (userindex !== -1) {
        const deletedUser = users.splice(userindex, 1)[0];
        console.log("User deleted:", deletedUser);
        return res.json(deletedUser);
    } else {
        console.log("User not found for ID:", id);
        return res.status(404).json({ message: "User not found" });
    }

});




app.post("/api/users", (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        res.json({ statu: "succes", id: users.length });
    });

});

app.listen(PORT, () => {
    console.log(`Started the server in the ${PORT}`);
})