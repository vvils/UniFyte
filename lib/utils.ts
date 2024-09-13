import mongoose, { ConnectOptions } from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log("MongoDB Connected");
  } catch (error: any) {
    console.error("Error connecting to MongoDB:", error);
    // throw new Error(error);
  }
};

export default connectDB;
