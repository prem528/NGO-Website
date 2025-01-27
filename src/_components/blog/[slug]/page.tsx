import { useState, useEffect } from "react";
import axios from "axios";
 
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
        const response = await axios.get("http://localhost:8080/api/v1/blog/all-blog");
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main>
      <div className="bg-gradient-to-b from-green-50 via-white to-green-50/30">
        <BlogPostComponent post={post} />
      </div>
    </main>
  );
}