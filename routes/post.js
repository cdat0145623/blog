const router = require("express").Router();
const Post = require("../models/Post");

router.get("/:id", async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json("Post is not found");
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const username = req.query.user;
    const catName = req.query.cat;
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({ categories: { $in: [catName] } });
    } else {
      posts = await Post.find();
    }

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newPost = await Post.create(req.body);

    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
          runValidators: true,
        }
      );
      return res.status(200).json(updatedPost);
    }
    return res.status(401).json("You can update only your post");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      await Post.deleteOne({ _id: req.params.id });
      return res.status(200).json("Post has been deleted");
    }
    return res.status(401).json("You can delete only your post");
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

module.exports = router;
