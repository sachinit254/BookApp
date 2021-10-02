import expressAsyncHandler from "express-async-handler";
import asyncHandler from "express-async-handler";
import User from "../model/userModel.js";
import generateToken from "../utils/generateToken.js";

// @description   Auth the user
// @route         POST /users/login
// @access        Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      city: user.city,
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
  const { firstname, lastname, city, email, password, profilePic } = req.body;

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
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      city: user.city,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

// @desc    GET user profile
// @route   GET users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.firstname = req.body.firstname || user.firstname;
    user.lastname = req.body.lastname || user.lastname;
    user.city = req.body.city || user.city;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      firstname: updatedUser.firstname,
      lastname: updatedUser.lastname,
      city: updatedUser.city,
      email: updatedUser.email,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not found");
  }
});

export { authUser, updateUserProfile, registerUser };
