import React, { useEffect, useState } from "react";
import "./Blogs.css";
import { FaMedium, FaDev } from "react-icons/fa";
import { getBlogs } from "../queries/getBlogs";
import GoBackButton from "../components/GoBackButton";

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const data = await getBlogs();
      console.log("Consoling from the Blogs tsx", data);
      setBlogs(data);
    }

    fetchBlogs();
  }, []);

  return (
    <div className="blogs-container">
      <GoBackButton></GoBackButton>
      <h2 className="blogs-title">✍️ My Blog Posts</h2>
      <p className="blogs-intro">
        A collection of my thoughts and tutorials on software development.
      </p>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <a
            href={blog.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-card"
            style={{ "--delay": `${index * 0.2}s` } as React.CSSProperties}
          >
            <div className="blog-icon animated-icon">{blog.icon}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <span className="blog-platform">{blog.platform}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
