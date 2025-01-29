import * as React from "react";
import axios from "axios";
import { toast } from "react-toastify";

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
  image,
  username,
  time,
  isUser,
}) => {
  const handleDelete = async () => {
    // Show confirmation toast
    toast.warn(
      <div>
        <p>Are you sure you want to delete this blog?</p>
        <div className="mt-2 flex justify-end space-x-2">
          <button
            onClick={() => toast.dismiss()}
            className="px-3 py-1 bg-gray-200 rounded-md text-sm"
          >
            Cancel
          </button>
          <button
            onClick={async () => {
              toast.dismiss();
              try {
                const { data } = await axios.delete(
                  `http://localhost:8080/api/v1/blog/delete-blog/${id}`
                );
                if (data?.success) {
                  toast.success("Blog deleted successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                  });
                  window.location.reload();
                }
              } catch (error) {
                console.error(error);
                toast.error("Failed to delete blog. Please try again.", {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              }
            }}
            className="px-3 py-1 bg-red-500 text-white rounded-md text-sm"
          >
            Delete
          </button>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        closeButton: false,
      }
    );
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-2xl mx-auto my-4 transition-transform hover:scale-105 border border-gray-400">
      {isUser && (
        <div className="flex justify-between items-center space-x-2">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-bold">
              {username.charAt(0).toUpperCase()}
            </div>
            <div>
              <h4 className="text-lg font-semibold">{username}</h4>
              <p className="text-sm text-gray-500">{new Date(time).toLocaleString()}</p>
            </div>
          </div>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      )}
      <div className="mt-4">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-800">Title: {title}</h3>
      </div>
    </div>
  );
};

export default BlogCard;