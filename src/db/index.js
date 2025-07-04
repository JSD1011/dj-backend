import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        //object conInstance 
        console.log(`\n MongoDB connected successfully !! 
            DB HoSt : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection error ", error);
        process.exit(1)
    }
}

export default connectDB;



































// https://learnforjobs.niit.com/india/graduates/banking-and-finance/hdfc-bank-ace-banker-program?utm_source=YT&utm_medium=SM&utm_campaign=InfluencerBFSI

// https://kotakaudit.manipalbfsi.com/?utm_source=CPA2&utm_campaign=Dharampal&utm_medium=vishal.singh%40u-next.com