//http server
import http from "http";
import app from './app';

const PORT: number = 9005;
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log("server running at 9005")
})

// server.on("error",())

