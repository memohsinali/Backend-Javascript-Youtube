import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB= async()=>{
    try {
        const connectionInstance= await mongoose.connect(`${process.env.MONGOdb_URL}/${DB_NAME}`);
        console.log(`\nMongoDB connected successfully! HOSt ${connectionInstance}`);
        
    } catch (error) {
        console.log("MongoDB Connection failed",error);
        process.exit(1);
    }
}

export default connectDB