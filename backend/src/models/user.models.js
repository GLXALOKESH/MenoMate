import mongoose from "mongoose";
import bcrype from "bcrypt";
import jwt from "jsonwebtoken";
import { DOTENV_PATH } from "../constants.js";

const userSchema = mongoose.Schema(
  {
  
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },  
  
    password: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
    },
    
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrype.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrype.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  try {
    return jwt.sign(
      {
        _id: this._id,
        email: this.email,
      },
      "your_access_token_secret_key", // Replace with your actual secret key
      {
        expiresIn: "1h", // Token expiry time (e.g., 1 hour)
      }
    );
  } catch (error) {
    console.error("Error generating access token:", error);
    throw new Error("Error generating access token");
  }
};

userSchema.methods.generateRefreshToken = function () {
  try {
    return jwt.sign(
      {
        _id: this._id,
      },
      "your_refresh_token_secret_key", // Replace with your actual secret key
      {
        expiresIn: "7d", // Token expiry time (e.g., 7 days)
      }
    );
  } catch (error) {
    console.error("Error generating refresh token:", error);
    throw new Error("Error generating refresh token");
  }
};



export const User = mongoose.model("User", userSchema);