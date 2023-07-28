const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const createError = require("http-errors");

router.put("/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json("User not found");
    }
    if (req.body.userId === req.params.id) {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          runValidators: true,
          new: true,
        }
      );
      await updatedUser.save();
      return res.status(200).json(updatedUser);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  if (req.body.userId === req.params.id) {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json("User not found");
    }
    try {
      await Post.deleteMany({ username: user.username });
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("You can update only your account");
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      res.status(404).json("User not found");
    }
    const { password, ...other } = user._doc;
    res.status(200).json(other);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
