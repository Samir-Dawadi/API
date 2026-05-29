import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

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