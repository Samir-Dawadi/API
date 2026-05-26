//http server
import http from "http";
import app from './app';

// const PORT:number = parseInt(process.env.PORT || '9005' , 10)        10 chai radix ho i.e Yo number kun language/system ma lekheko ho?" vanera computer lai bujhaune kura ho. 10->decimal so 9*10^3 + 9*10^2 + 9*10^1 + 9*10^0 =9005
const PORT: number = 9005;
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT)
    console.log("Press ctrl + c to disconnect your server")
})

server.on("error", (err: NodeJS.ErrnoException) => {          //server.on le eventlisten garxa , yeha chai errror wala event listen garna laxa
    if (err.code === "EADDRINUSE") {                          //if 9005 port is already used by other service than server will throw an error event 
        console.error(`port ${PORT} already in use . Try with different than ${PORT}`)
    }
    else {
        console.error("Server Error :", err.message)
    }

    process.exit(1)                                             //It immediately terminates the Node.js process with an error status code i.e 1.
})