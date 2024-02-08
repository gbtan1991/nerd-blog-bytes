import mongoose from "mongoose";

let cachedConnection = null;

export async function dbConnect() {
  if (cachedConnection) {
    console.log("Using cached database connection");
    return cachedConnection;
  }

  try {
    const conString = process.env.mongoDbConnection;
    const connection = await mongoose.connect(conString, {
      autoIndex: true,
    });

    console.log("New database connection established");
    cachedConnection = connection;

    return connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}
