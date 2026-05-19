//http server
import http from "http";

const PORT: number = 9005;
const server = http.createServer((req, res) => {
    res.end("<h1>hello world</h1>")
});

server.listen(PORT, () => {
    console.log("server running at 9005")
})

// server.on("error",())

