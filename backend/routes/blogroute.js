const express = require("express");
const router = express.Router();
const blog = require("../models/blogmodel");
const multer = require("multer");
const Blog = require("../models/blogmodel")


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+"-"+ file.originalname);
  },
});

console.log(storage);
const upload = multer({ storage: storage });

router.post('/add',upload.single('image'), async (req,res)=>{
    try {
        const {title , content } = req.body;
        const image = req.file? `/uploads/${req.file.filename}`:null;
        const newBlog = new Blog ({
            title : title,
            content : content ,
            image : image
        })
        await newBlog.save();
        console.log('newBlog',newBlog);
        res.send(newBlog);
    } catch (error) {
        console.log(error);
    }
});

router.get("/", async (req, res) => {
  const data = await blog.find();
  res.send(data);
});

module.exports = router;
