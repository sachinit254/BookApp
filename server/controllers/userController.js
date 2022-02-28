import expressAsyncHandler from "express-async-handler";
import asyncHandler from "express-async-handler";
import User from "../model/userModel.js";
import generateToken from "../utils/generateToken.js";

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

// @description    Update user profile
// @route   PUT users/profile
// @access  Private
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

export { getUserById, authUser, updateUserProfile, registerUser };
