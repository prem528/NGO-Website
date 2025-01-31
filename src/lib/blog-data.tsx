import { useEffect, useState } from "react";
import axios from "axios";

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: string[];
}

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://ngo-website11.onrender.com/api/v1/blog/all-blog");
        const blogs = response.data.blogs.map((blog: any) => ({
          id: blog._id, // Map MongoDB `_id` to `id`
          title: blog.title,
          slug: blog.slug,
          date: new Date(blog.date).toLocaleDateString(), // Format the date
          category: blog.category,
          image: blog.image,
          excerpt: blog.excerpt,
          content: blog.content,
        }));
        setBlogPosts(blogs);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch blogs. Please try again later.");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {blogPosts.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.category}</p>
          <p>{blog.date}</p>
          <img src={blog.image} alt={blog.title} />
          <p>{blog.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
