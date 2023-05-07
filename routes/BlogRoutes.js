const express = require("express");
const {
    getAllBlogs,
    getBlogById,
    updateBlog,
} = require("../controllers/BlogController");

const router = express.Router();

router.route("/:id").post(updateBlog);
router.route("/:id").get(getBlogById);
router.route("/").get(getAllBlogs);

module.exports = router;