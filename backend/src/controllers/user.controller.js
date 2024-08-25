import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponce.js";
import { User } from "../models/user.models.js";
import mongoose from "mongoose";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { decode } from "jsonwebtoken";
import e from "express";

const getRefreshAndAccessToken = async (userid) => {
    try {
      const user = await User.findById(userid);
      
      if (!user) {
        throw new Error("User not found");
      }
  
      const accessToken = user.generateAccessToken();
      const refreshToken = user.generateRefreshToken();
  
      user.refreshToken = refreshToken;
  
      await user.save({ validateBeforeSave: false });
  
      return { accessToken, refreshToken };
    } catch (error) {
      console.error("Error in getRefreshAndAccessToken:", error.message); // Log the error message correctly
      throw new ApiError(
        500,
        error.message || "Error while generating access or refresh token"
      );
    }
  };
  

const registerUser = asyncHandler(async (req, res) => {
  const {  email,  password } = req.body;
  if (
    [ email,  password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existuser = await User.findOne({
    $or: [ { email }],
  });

  if (existuser) {
    throw new ApiError(409, "Username or email already exists");
  }

  const user = await User.create({

    email,
    password,
   
  });

  const createduser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createduser) {
    throw new ApiError(500, "Something Went Wrong in server");
  }

  return res
    .status(201)
    .json(new ApiResponce(200, createduser, "Successfully registered"));
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    if (!email) {
      throw new ApiError(401, "Email is required");
    }
  
    const user = await User.findOne({ email });
  
    if (!user) {
      throw new ApiError(401, "User not found");
    }
  
    const isPasswordvalid = await user.isPasswordCorrect(password); // Add await
  
    if (!isPasswordvalid) {
      throw new ApiError(401, "Password is incorrect");
    }
  
    const { accessToken, refreshToken } = await getRefreshAndAccessToken(user._id);
  
    const loggedinUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );
  
    const options = {
      httpOnly: true,
      secure: true,
    };
  
    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponce(
          200,
          { user: loggedinUser, accessToken, refreshToken },
          "User Logged in Successfully"
        )
      );
  });
  
  const refreshAuthToken = asyncHandler(async (req, res) => {
    const incomingrefreshtoken =
      req.cookies.refreshToken || req.body.refreshToken;
  
    if (!incomingrefreshtoken) {
      throw new ApiError(401, "No refresh token found");
    }
  
    try {
      const decoded = jwt.verify(
        incomingrefreshtoken,
        process.env.REFRESH_TOKEN_SECRET
      );
  
      const user = await User.findById(decoded._id);
  
      if (!user) {
        throw new ApiError(401, "Invalid refresh token");
      }
  
      if (incomingrefreshtoken !== user.refreshToken) {
        throw new ApiError(401, "Invalid refresh token");
      }
  
      const { accessToken, refreshToken: newrefreshToken } = await getRefreshAndAccessToken(user._id); // Add await
  
      const options = {
        httpOnly: true,
        secure: true,
      };
  
      return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newrefreshToken, options)
        .json(
          new ApiResponce(
            200,
            {
              accessToken,
              refreshToken: newrefreshToken,
            },
            "New refresh token and access token generated"
          )
        );
    } catch (error) {
      console.error("Error in refreshAuthToken:", error.message);
      throw new ApiError(
        400,
        error.message || "Something went wrong while generating new tokens"
      );
    }
  });
  
  

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponce(200, {}, "Successfully Logged Out"));
});





const getCurrentUser = asyncHandler(async (req, res) => {
  return res.status(200).json(200, res.user, "User fetched Successfully");
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
    const { oldPassword, NewPassword } = req.body;
  
    const user =await User.findById(req.user._id);
  
    const isPasswordCorrect = user.isPasswordCorrect(oldPassword);
  
    if (!isPasswordCorrect) {
      throw new ApiError(401, "Invalid Password");
    }
  
    user.password = NewPassword;
  
    await user.save({ validateBeforeSave: false });
  
    return res
      .status(200)
      .json(new ApiResponce(200, {}, "Password Changed Sucessfully"));
  });

 
  
  






export {
  registerUser,
  logoutUser,
  loginUser,
  refreshAuthToken,
  getCurrentUser,
changeCurrentPassword,
 
};