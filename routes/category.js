const router = require("express").Router();
const Category = require("../models/Category");

router.post("/", async (req, res, next) => {
  try {
    const newCategory = await Category.create(req.body);

    if (!newCategory) {
      return res.status(404).json("Category is not available");
    }

    res.status(200).json(newCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const category = await Category.find();

    if (!category) {
      return res.status(404).json("Category is not available");
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
