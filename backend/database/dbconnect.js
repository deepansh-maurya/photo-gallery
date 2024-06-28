import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./env" });
export const mongoDBconnect = async () => {
  try {
    const url = process.env.MONGODB_URL;
    await mongoose.connect(`${url}/photo-gallery`);
    console.log("db connection successfull");
  } catch (error) {
    console.log("conection error", error.message);
  }
};
