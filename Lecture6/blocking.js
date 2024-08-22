const blocking = require("fs");

//Length of the os cpu;
const os = require("os");
console.log(os.cpus().length);


// checking the blockign 

console.log("1");

 const display = blocking.readFileSync("./intro.txt","utf-8");
console.log(display);
console.log("2");


// non-blocking

console.log("dipu");

blocking.readFile("./intro.txt", "utf-8", (err,result)=>{
    console.log(result);
})

console.log("3");