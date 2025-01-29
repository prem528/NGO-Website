import type React from "react";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import BlogNavigation from "./BlogNavigation";

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
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getAllBlogs = useCallback(async () => {
    try {
      const { data } = await axios.get<{ success: boolean; blogs: Blog[] }>(
        "http://localhost:8080/api/v1/blog/all-blog"
      );
      if (data?.success) {
        setBlogs(data?.blogs);
        setError(null);
      }
    } catch (err) {
      setError("Failed to load blogs. Please try again later.");
      console.error(err);
    }
  }, []);

  useEffect(() => {
    getAllBlogs();
  }, [getAllBlogs]);

  const userId = localStorage.getItem("userId");

  return (
    <div className="container mx-auto px-4 py-8">
      <BlogNavigation />
      {error && <p className="text-red-500 text-center">{error}</p>}
      {blogs.length === 0 && !error && (
        <p className="text-center text-gray-500">No blogs found.</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            id={blog._id}
            isUser={userId === blog.user._id}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            username={blog.user.username}
            time={blog.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
