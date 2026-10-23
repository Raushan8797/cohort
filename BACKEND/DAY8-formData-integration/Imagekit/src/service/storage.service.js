import Imagekit from "@imagekit/nodejs";
import dotenv from "dotenv";

dotenv.config();

const storageInstance = new Imagekit({
  urlEndpoint: process.env.ImageKit_url,
  publicKey: process.env.IK_public_key,
  privateKey: process.env.IK_private_key,
});

export const sendFiles = async (file, fileName) => {
  const obj = {
    file: file.toString("base64"),
    fileName: fileName,
    folder: "ritik-pro",
  };

  return await storageInstance.files.upload(obj);
};