//http server
import http from "http";
import app from './app';

// const PORT:number = parseInt(process.env.PORT || '9005' , 10) 
const PORT: number = 9005;
const server = http.createServer(app);

server.listen(PORT, () => { 
    console.log("Server running on http://localhost:"+PORT)
    console.log("Press ctrl + c to disconnect your server")
})

server.on("error",(err:NodeJS.ErrnoException)=>{
    if(err.code === "EADDRINUSE"){
        console.error(`port ${PORT} already in use . Try with different than ${PORT}`)
    }
    else{
        console.error("Server Error :" , err.message)
    }

    process.exit(1)
})