import asyncHandler from "express-async-handler";
import Token from "../model/token.js";
import sendEmail from "../utils/sendEmail.js";
import User from "../model/userModel.js";
import generateToken from "../utils/generateToken.js";
import crypto from "crypto";

// @description  Get user by id
// @route        GET /users/:id
// @access       Private
const getUserById = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.json({
      _id: user.id,
      profilepic: user.profilepic,
      firstname: user.firstname,
      lastname: user.lastname,
      city: user.city,
      phone: user.phone,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("User not found");
  }
});

// @description   Auth the user
// @route         POST /users/login
// @access        Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user.id,
      profilepic: user.profilepic,
      firstname: user.firstname,
      lastname: user.lastname,
      city: user.city,
      phone: user.phone,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

// @description     Register new user
// @route           POST /users/register
// @access          Public

const registerUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, city, email, password, phone } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(404).status;
    throw new Error("User already exists");
  }

  const user = await User.create({
    firstname,
    lastname,
    city,
    email,
    password,
    phone,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      profilepic: user.profilepic,
      firstname: user.firstname,
      lastname: user.lastname,
      city: user.city,
      email: user.email,
      phone: user.phone,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

// @description     Update user profile
// @route           PUT users/profile
// @access          Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.profilepic = req.body.profilepic || user.profilepic;
    user.firstname = req.body.firstname || user.firstname;
    user.lastname = req.body.lastname || user.lastname;
    user.city = req.body.city || user.city;
    user.email = req.body.email || user.email;
    user.phone = req.body.phone || user.phone;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      profilepic: updatedUser.profilepic,
      firstname: updatedUser.firstname,
      lastname: updatedUser.lastname,
      city: updatedUser.city,
      email: updatedUser.email,
      phone: updatedUser.phone,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not found");
  }
});

// @description     Reset link for password
// @route           POST users/forgot-password
// @access          Public
const getPasswordResetLink = asyncHandler(async (req, res) => {
  if (req.body.email) {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(404);
      throw new Error("Email does not exist");
    }
    let token = await Token.findOne({ userId: user._id });
    if (!token) {
      token = await new Token({
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();
    }
    const link = `${process.env.BASE_URL}/password-reset/${user._id}/${token.token}`;
    await sendEmail(user.email, "Password reset", link);
    res.send("Password reset link has been sent to your email address");
  } else {
    res.status(404);
    throw new Error("Please provide email");
  }
});

// @description     Reset password
// @route           POST users/reset-password
// @access          Public
const resetPassword = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.userId);
  if (!user) {
    res.status(400);
    throw new Error("Invalid link or expired");
  }
  const token = await Token.findOne({
    userId: user._id,
    token: req.params.token,
  });

  if (!token) {
    res.status(400);
    throw new Error("Invalid link or expired");
  }
  if (req.body.password) {
    user.password = req.body.password;
    await user.save();
    await token.delete();
    res.send("Password reset successfully");
  } else {
    res.status(400);
    throw new Error("Please provide new password");
  }
});

export {
  getUserById,
  authUser,
  updateUserProfile,
  registerUser,
  getPasswordResetLink,
  resetPassword,
};
