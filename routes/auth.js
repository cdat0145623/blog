const router = require("express").Router();
const User = require("../models/User");
const createError = require("http-errors");

router.post("/register", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      throw createError.BadRequest();
    }

    const isUser = await User.findOne({ username });
    const isEmail = await User.findOne({ email });

    if (isUser || isEmail) {
      throw createError.Conflict(
        `${username} or ${email} is ready been registered`
      );
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

    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
