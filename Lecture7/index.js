const http = require("http");

// add the fs 
const fs = require("fs");

const myserver = http.createServer((req, res) => {

    const log = `${Date.now()} ${req.url}Return Request Resiver\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case '/': res.end("Hello for the server:");
                break;
            case '/about': res.end("Hii am i Aditya singh");
                break;
            case '/contact': res.end("7870655593");
            default: res.end("error 404");
        }
    })
});

myserver.listen(8000, () => "Server started:");
