const blogService =require("../services/BlogService");
const BlogModel = require("../models/Blog");

exports.getAllBlogs = async (req, res) => {
    try{
        const blogs = await blogService.getAllBlogs();
        res.render('home', {blogs:blogs.map(blog => blog.toObject())});
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

// exports.createBlog = async (req, res) =>{
//     try{
//         const blog = await blogService.createBlog(req.body);
//         res.json({data: blog, status: "success"});
//     }catch(err){
//         res.status(500).json({error: err.message});
//     }
// };

exports.getBlogById = async (req, res) =>{
    try{
        const blog = await blogService.getBlogById(req.params.id);
        res.render('edit', {blog:blog? blog.toObject() : blog});
    }catch(err){
        res.status(500).json({error: err.message});
    }
};
exports.updateBlog = async (req, res) =>{
    try{
        console.log('id: '+req.body.title);
        BlogModel.updateOne({_id:req.params.id},req.body)
        .then(() => res.redirect('/'));
    }catch(err){
        res.status(500).json({error: err.message});
    }
};
// exports.deleteBlog = async (req, res) =>{
//     try{
//         const blog = await blogService.deleteBlog(req.params.id, req.body);
//         res.json({data: blog, status: "success"});
//     }catch(err){
//         res.status(500).json({error: err.message});
//     }
// };