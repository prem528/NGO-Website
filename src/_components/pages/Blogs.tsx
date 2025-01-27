import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";

// Define types for Blog and User
interface User {
  _id: string;
  username: string;
}

interface Blog {
  _id: string;
  title: string;
  description: string;
  image: string;
  user: User;
  createdAt: string;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]); // State with type Blog array

  // Fetch all blogs
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get<{ success: boolean; blogs: Blog[] }>(
        "http://localhost:8080/api/v1/blog/all-blog"
      );
      if (data?.success) {
        setBlogs(data?.blogs);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <BlogCard
          key={blog._id} // Add a key for efficient rendering
          id={blog._id}
          isUser={localStorage.getItem("userId") === blog.user._id}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          username={blog.user.username}
          time={blog.createdAt}
        />
      ))}
    </div>
  );
};

export default Blogs;
