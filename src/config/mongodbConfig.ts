import dns from 'dns';                    //this will set the DNS servers to Google's public DNS servers
dns.setServers(['8.8.8.8', '8.8.4.4']);         //this is done to ensure that the application can resolve domain names correctly, especially in environments where the default DNS servers may not be reliable or accessible. By using Google's public DNS servers, the application can improve its ability to resolve domain names and connect to external services, such as MongoDB, without encountering DNS-related issues.

import mongoose from "mongoose";
import { MongoConfig } from "./appconfig";

(async () => {                                                      //always async & if mpngodb is imported in any file then this will automatically executed with the help of immediately invoked function expression (IIFE)
    try {
        await mongoose.connect(MongoConfig.url as string, {
            dbName: MongoConfig.name,
            autoCreate: true,                                           //if db xaina vani auto banaidinxa
            autoIndex: true
        })
        console.log("Database connected successfully")
    } catch (exception) {
        console.error("Error connecting mongodb")
        console.log(exception)
        process.exit(1)
    }
})()