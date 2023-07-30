const express = require("express");
const app = express();
const db = require("./helpers/connection_mongodb");
const dotenv = require("dotenv");
dotenv.config();
const AuthRoute = require("./routes/auth");
const UserRoute = require("./routes/user");
const PostRoute = require("./routes/post");
const createError = require("http-errors");
const CategoryRoute = require("./routes/category");
const multer = require("multer");
const path = require("path");

//Connect to MongoDB
db.connect();

const PORT = process.env.PORT || 3002;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res, next) => {
  console.log(req.file);
  res.status(200).json("File has been uploaded");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, "/images")));

app.use("/api/auth", AuthRoute);
app.use("/api/users", UserRoute);
app.use("/api/posts", PostRoute);
app.use("/api/categories", CategoryRoute);

app.use((req, res, next) => {
  next(createError.NotFound("Route not found"));
});

app.use((err, req, res, next) => {
  res.json({
    status: err.status || 500,
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
