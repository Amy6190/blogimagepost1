import React from "react";

const BlogList = ({ blogs }) => {
  return (
    <div>
      <h2>All Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog._id} style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          {blog.image && <img src={`http://localhost:5000${blog.image}`} alt="Blog" style={{ width: "200px" }} />}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
