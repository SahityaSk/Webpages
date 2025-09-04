import fs from "fs";
import imagekit from "../configs/imageKit.js";
import Blog from "../models/Blog.js";
import Comment from "../models/Comments.js";
import main from "../configs/gemini.js";

// Add Blog
export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(req.body.blog);
    const imageFile = req.file;

    if (!title || !description || !category || !imageFile) {
      return res.json({ success: false, message: "Missing required fields" });
    }

    const fileBuffer = fs.readFileSync(imageFile.path);

    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs"
    });

    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto"}, {format: "webp"}, {width: 1280 }
      ]
    });

    const image = optimizedImageUrl;

    await Blog.create({
      title, subTitle, description, category, image, isPublished
    });

    res.json({ success: true, message: "Blog Added Successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get all published blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true });
    res.json({ success: true, blogs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get blog by ID
export const getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.json({ success: false, message: "Blog Not Found" });
    }

    res.json({ success: true, blog });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Delete blog by ID
export const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.body;
    const blog = await Blog.findByIdAndDelete(id);
    
    await Comment.deleteMany({blog: id});

    if (!blog) {
      return res.json({ success: false, message: "Blog Not Found" });
    }

    res.json({ success: true, message: "Blog Deleted Successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Toggle publish status
export const togglePublish = async (req, res) => {
  try {
    const { id } = req.body;
    const blog = await Blog.findById(id);

    await Comment.deleteMany({blog: id});

    if (!blog) {
      return res.json({ success: false, message: "Blog Not Found" });
    }

    blog.isPublished = !blog.isPublished;
    await blog.save();

    res.json({ success: true, message: "Blog Status Updated" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const addComment = async (req, res) => {
    try {
      const { blog, name, content } = req.body;
      await Comment.create({blog, name, content});
      res.json({ success: true, message: "Comment Added for Review" });
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  };

  export const getBlogComments = async (req, res) =>{
      try {
        const { blogId } = req.body;
        const comments = await Comment.find({blog: blogId, isApproved: true}).sort({createdAt: -1});
        res.json({ success: true, comments});
      } catch (error) {
        res.json({ success: false, message: error.message });
      }
  }

  export const generateContent = async (req, res)=>{
      try {
        const { prompt } = req.body
        const content = await main(prompt + 'Generate a blog content for this topic in simple text format')
        res.json({success: true, content})
      } catch (error) {
        res.json({success: false, message: error.message})
      }
  }
