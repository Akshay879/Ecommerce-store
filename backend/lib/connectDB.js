import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to DB");
    } catch(error) {
        console.log("Error connecting to DB ",error.message);
        process.exit(1);
    }
};