import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async() => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("MONGODB CONNECTED !!! DB HOST :", mongoose.connection.host || mongoose.connection.name || mongoose.connection.readyState);

        
    } catch(error){
        console.log("MONGODB Connection ERROR",error);
        process.exit(1);
    }
}

export default connectDB;