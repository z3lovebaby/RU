const express = require("express");
const {
    getAllBlogs,
    getBlogById,
    updateBlog,
} = require("../controllers/BlogController");

const router = express.Router();

router.route("/").get(getAllBlogs);
router.route("/:id").get(getBlogById).post(updateBlog);

module.exports = router;