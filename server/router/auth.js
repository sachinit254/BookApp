const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("../db/mongodbcon");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("hello world from server router files");
});

// register ka code

router.post("/register", async (req, res) => {
  const { firstname, lastname, city, email, password, confirmpassword } = req.body;

  // agar yeh sab hai to  nahin hai to kya hoga
  if (!firstname || !lastname || !city || !email || !password || !confirmpassword) {
    return res.status(422).json({ error: "plz filled the " });
  }

  // agar email database main hai to mat karo register
  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already Exist" });
    } else if (password !== confirmpassword) {
      return res.status(422).json({ error: "password are not matching" });
    } else {
      // nahin hai to new data add karo save karo
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

// login ka code
router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    // data dal rahe hai yah nahin
    if (!email || !password) {
      return res.status(400).json({ error: "plz filled the data" });
    }
    // email hai yah nahi
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      //  password sahi hai yah nahin compare password right or  wrong
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
        res.json({ message: "User login successfuly" });
      }
    } else {
      res.status(400).json({ message: "Invalid Credientials" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
