import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
const MONGODB_URI=`mongodb+srv://yagyanshtyagi61:euk1ocXHTSQ8ljMy@cluster1easyui.yqtxw.mongodb.net`
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${MONGODB_URI}/${DB_NAME}`,
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.log("MONGODB connection FAILED", error);
    process.exit(1);
  }
};

export default connectDB;
