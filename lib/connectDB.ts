import mongoose, { Connection } from "mongoose";

let isConnected: Connection | boolean = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("Mongodb is already connected");
    return isConnected;
  }
  try {
    const res = await mongoose.connect(process.env.MONGO_URI!);
    isConnected = res.connection;
    console.log("MongoDB is connected.");
    return isConnected;
  } catch (error) {
    console.log("mongodb connect error::", error);
  }
};

export default connectDB;
