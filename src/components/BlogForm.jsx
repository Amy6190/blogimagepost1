import React, { useState } from "react";
import axios from "axios";

const BlogForm = ({ fetchBlogs }) => {
  const [blog, setBlog] = useState({ title: "", content: "" });
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", blog.title);
    formData.append("content", blog.content);
    if (image) formData.append("image", image);

    await axios.post("http://localhost:5000/api/blogs/add", formData);
    fetchBlogs();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={blog.title}
        onChange={(e) => setBlog({ ...blog, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Content"
        value={blog.content}
        onChange={(e) => setBlog({ ...blog, content: e.target.value })}
        required
      />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">Add Blog</button>
    </form>
  );
};

export default BlogForm;
