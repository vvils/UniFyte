import { User } from "@nextui-org/react";
import mongoose, { ConnectionStates, ConnectOptions } from "mongoose";

const connection: { isConnected?: ConnectionStates } = {};

const connectDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Mongo Exists");
      return;
    }
    const db = await mongoose.connect(process.env.MONGODB_URI!, {
      useNewUrlParser: true,
    } as ConnectOptions);
    connection.isConnected = db.connections[0].readyState;
    console.log("MongoDB Connected");
    User;
  } catch (error: any) {
    console.error("Error connecting to MongoDB:", error);
    // throw new Error(error);
  }
};

export default connectDB;
