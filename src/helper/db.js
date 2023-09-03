import mongoose from "mongoose";
export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
    });
    console.log("connected with host ", connection.host);
  } catch (error) {
    console.log("failed  to connect with database");
    console.log(error);
  }
};
