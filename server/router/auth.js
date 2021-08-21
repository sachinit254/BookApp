const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("../db/mongodbcon");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("hello world from server router files");
});

// Registration

router.post("/register", async (req, res) => {
  const { firstname, lastname, city, email, password, confirmpassword } = req.body;

  // checking that every data exists or not
  if (!firstname || !lastname || !city || !email || !password || !confirmpassword) {
    return res.status(422).json({ error: "Fill all the textFields" });
  }

  // email authentication if email exists in db don't allow user to register
  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already Exist" });
    } else if (password !== confirmpassword) {
      return res.status(422).json({ error: "password doesn't match" });
    } else {
      // adding user details
      const user = new User({
        firstname,
        lastname,
        city,
        email,
        password,
        confirmpassword,
      });

      await user.save();
      res.status(201).json({ messge: "user registered successfuly" });
    }
  } catch (err) {
    console.log(err);
  }
});

// login 
router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    // making sure that user fill both the textfields
    if (!email || !password) {
      return res.status(400).json({ error: "fill the textfields" });
    }
    // checking if email exists
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      //  comparing password
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      console.log(token);
      res.cookie("jwttoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ message: "Invalid Credientials" });
      } else {
        res.json({ message: "User login successfully" });
      }
    } else {
      res.status(400).json({ message: "Invalid Credientials" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
