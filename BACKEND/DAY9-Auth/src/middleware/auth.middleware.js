import jwt from "jsonwebtoken";
import userModel from "../module/user.module.js";
import dotenv from "dotenv"
dotenv.config()




export const authenticate = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (!token) {
    // if we dont get the token the the request will be denied
    return req.status(401).json({
      message: "TOKEN NOT FOUND",
    });
  }
  //   const data = jwt.decode(token); // THIS CAN DECODE AND READ THE DATA

  const data = jwt.verify(
    token,
   process.env.JWT_SECRET
  );  // THIS WILL HELP TO VERIY THE TOKEN WITH THE HELP OF JWT SECRETE 

  const user = await userModel.findById(data.id);

  req.user = user;

  next();
};
