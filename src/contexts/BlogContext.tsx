import { createContext, useContext, useEffect, useState, ReactNode } from "react";
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

interface BlogContextType {
  blogPosts: BlogPost[];
  loading: boolean;
  error: string | null;
  fetchBlogs: () => Promise<void>;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export function BlogProvider({ children }: { children: ReactNode }) {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get("https://ngo-website11.onrender.com/api/v1/blog/all-blog");
      const blogs = response.data.blogs.map((blog: any) => ({
        id: blog._id,
        title: blog.title,
        slug: blog.slug,
        date: new Date(blog.date).toLocaleDateString(),
        category: blog.category,
        image: blog.image,
        excerpt: blog.excerpt,
        content: blog.content,
      }));
      setBlogPosts(blogs);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch blogs. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogPosts, loading, error, fetchBlogs }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
}
