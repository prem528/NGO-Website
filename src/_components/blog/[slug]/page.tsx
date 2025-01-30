import { useState, useEffect } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { BlogPostComponent } from "../Blog-Post";
import { useParams } from "react-router-dom";
import { BlogPost } from "../../../lib/blog-data";

export default function BlogPostPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_BACKEND_URL}/api/v1/blog/all-blog`);
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
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch blogs");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-green-600" />
        <p className="mt-2 text-sm text-gray-600">Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-red-500 bg-red-50 px-4 py-3 rounded-lg">
          <p className="font-medium">Error loading posts</p>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-600 bg-gray-50 px-4 py-3 rounded-lg">
          <p className="font-medium">Post not found</p>
        </div>
      </div>
    );
  }

  return (
    <main>
      <div className="bg-gradient-to-b from-green-50 via-white to-green-50/30">
        <BlogPostComponent post={post} />
      </div>
    </main>
  );
}