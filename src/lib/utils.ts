import mongoose, { ConnectionStates, ConnectOptions } from "mongoose";
import User from "./models/user"

const connection: { isConnected?: ConnectionStates } = {};

const connectDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Mongo Exists");
      User
      return;
    }
    const db = await mongoose.connect(process.env.MONGODB_URI!, {
      useNewUrlParser: true,
    } as ConnectOptions);
    connection.isConnected = db.connections[0].readyState;
    console.log("MongoDB Connected");
    return Promise.resolve(true)
  } catch (error: any) {
    console.error("Error connecting to MongoDB:", error);
    return Promise.resolve(error)
    // throw new Error(error);
  }
};

export default connectDB;
