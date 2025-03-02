import React, { useState, useEffect } from "react";
import BlogForm from "./components/BlogForm.jsx";
import BlogList from "./components/BlogList.jsx";
import axios from "axios";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const res = await axios.get("http://localhost:5000/api/blogs");
    setBlogs(res.data);
  };

  return (
    <div>
      <h1>Blog Application</h1>
      <BlogForm fetchBlogs={fetchBlogs} />
      <BlogList blogs={blogs} />
    </div>
  );
};

export default App;
