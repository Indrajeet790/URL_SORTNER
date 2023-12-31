const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt =require("bcryptjs");

// user signup code 
module.exports.userSignUp= async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (username && email && password) {
      const salt = await bcrypt.genSalt(parseInt(process.env.SALT_CONSTANT));
      const hashedPassword = await bcrypt.hash(password, salt);
      const userData = new User({
        username: username,
        email: email,
        password: hashedPassword,
      });
      await userData.save();
      res
        .status(201)
        .json({ status: "success", message: "user registered successfully" ,userData});
    } else {
      res
        .status(400)
        .json({ status: "failed", message: "All fields are required" });
    }
  } catch (error) {
    if (error.code === 11000) {
      res
        .status(409)
        .json({ status: "failed", message: "email already exists!" });
    } else {
      res.status(500).json({
        status: "failed",
        message: "Unable To Register",
        error: error.message,
      });
    }
  }
};

// user signIn code
module.exports.UserSignIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
        expiresIn: process.env.EXPIRES_IN
      });
      return res.status(200).json({
        message: "sign in Successful",
        data: {
          token: token,
        }
      });
    } else {
      res
        .status(400)
        .json({ status: "failed", message: "All fields are required" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

