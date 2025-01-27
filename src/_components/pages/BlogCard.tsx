import * as React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Define props type
interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  username: string;
  time: string;
  isUser: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  description,
  image,
  username,
  time,
  isUser,
}) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/blog-details/${id}`);
  };

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`/api/v1/blog/delete-blog/${id}`);
      if (data?.success) {
        alert("Blog Deleted");
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-2xl mx-auto my-4 transition-transform hover:scale-105">
      {isUser && (
        <div className="flex justify-end space-x-2">
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      )}
      <div className="flex items-center space-x-4 mt-2">
        <div className="w-12 h-12 bg-red-500 text-white flex items-center justify-center rounded-full text-lg font-bold">
          {username.charAt(0).toUpperCase()}
        </div>
        <div>
          <h4 className="text-lg font-semibold">{username}</h4>
          <p className="text-sm text-gray-500">{new Date(time).toLocaleString()}</p>
        </div>
      </div>
      <div className="mt-4">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-800">Title: {title}</h3>
        <p className="text-gray-600 mt-2">Description: {description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
