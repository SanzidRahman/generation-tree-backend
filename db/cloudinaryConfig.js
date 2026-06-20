import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const UploadOnCloudinary = async (filePath) => {
  try {
    if (!filePath) return null;
    const res = await cloudinary.uploader.upload(filePath);
    return res;
  } catch (error) {
    fs.unlinkSync(filePath);
    console.log(error.message);
  }
};
