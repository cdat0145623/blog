const router = require("express").Router();
const User = require("../models/User");
const createError = require("http-errors");

router.post("/register", async (req, res, next) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password) {
      return res
        .status(401)
        .json(`${username}, ${email}, ${password} have to exist`);
    }

    const isUser = await User.findOne({ username });
    const isEmail = await User.findOne({ email });

    if (isUser || isEmail) {
      return res.status(401).json(`${username} or ${email} is exist`);
    }

    if (password !== confirmPassword) {
      throw createError.Unauthorized("Password don't match!");
    }

    const newUser = await User.create({
      username,
      email,
      password,
    });

    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      throw createError.Unauthorized("User not found!");
    }
    const isValid = await user.checkPassword(req.body.password);

    if (!isValid) {
      throw createError.Unauthorized("Password is incorrect");
    }

    const { password, ...others } = user._doc;

    res.status(200).json({ user: others });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
