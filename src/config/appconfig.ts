import { config } from "dotenv"                               //config is used to load environment variables from a .env file into process.env. This allows you to manage configuration settings for your application in a separate file, making it easier to maintain and secure sensitive information like API keys, database credentials, etc. 
config()

export const AppConfig = {                                     //used to store application-level configuration settings, such as the port number the server will listen on and the URL for assets. By centralizing these settings in a single object, it becomes easier to manage and access them throughout the application.
    assestsUrl: process.env.ASSEST_URL
}


export const MongoConfig = {                                 //used to store MongoDB configuration settings, such as the URL for connecting to the MongoDB server and the name of the database to use. This allows you to easily manage and access these settings when establishing a connection to the MongoDB database in your application.
    url: process.env.MONGODB_URL,
    name: process.env.MONGODB_NAME
}

