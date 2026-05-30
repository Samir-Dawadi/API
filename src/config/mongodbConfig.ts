import dns from 'dns';                    //this will set the DNS servers to Google's public DNS servers
dns.setServers(['8.8.8.8', '8.8.4.4']);         //this is done to ensure that the application can resolve domain names correctly, especially in environments where the default DNS servers may not be reliable or accessible. By using Google's public DNS servers, the application can improve its ability to resolve domain names and connect to external services, such as MongoDB, without encountering DNS-related issues.

import mongoose from "mongoose";
import { MongoConfig } from "./appconfig";

(async () => {                                                      //always async & if mpngodb is imported in any file then this will automatically executed with the help of immediately invoked function expression (IIFE)
    try {
        await mongoose.connect(MongoConfig.url as string, {
            dbName: MongoConfig.name,                                   //this is the name of the database to use. If the database does not exist, MongoDB will create it automatically when you first write data to it.
            autoCreate: true,                                           //this option tells Mongoose to automatically create the database if it doesn't exist when you connect to it. This can be useful in development environments where you want to quickly set up a new database without having to manually create it first. However, in production environments, it's generally recommended to create the database manually and set appropriate permissions to ensure better security and control over your data.
            autoIndex: true                                             // this option tells Mongoose to automatically create indexes defined in your schemas when you connect to the database. This can be useful for development and testing environments, as it ensures that your indexes are always up to date without requiring manual intervention. However, in production environments, it's often recommended to disable autoIndex and manage indexes manually to avoid potential performance issues during application startup, especially if you have a large dataset or complex indexing requirements.
        })
        console.log("Database connected successfully")
    } catch (exception) {
        console.error("Error connecting mongodb")
        console.log(exception)
        process.exit(1)                                                // this line is used to exit the Node.js process with a non-zero exit code, indicating that an error occurred. In this case, if there is an error connecting to MongoDB, the application will log the error message and then terminate with an exit code of 1, which is a common convention for indicating that an error occurred. This helps to prevent the application from running in an unstable state when it cannot connect to the database, and allows for better error handling and debugging.
    }
})()