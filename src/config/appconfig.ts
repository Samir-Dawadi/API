import { config } from "dotenv"                               //config is used to load environment variables from a .env file into process.env. This allows you to manage configuration settings for your application in a separate file, making it easier to maintain and secure sensitive information like API keys, database credentials, etc. 
config()

export const AppConfig = {
    assestsUrl: process.env.ASSEST_URL
}