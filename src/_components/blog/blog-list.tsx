import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useBlog } from "../../contexts/BlogContext"; // Import Blog Context

export function BlogList() {
  const { blogPosts, loading, error, fetchBlogs } = useBlog(); // Use blog context

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-[#7ab80e]" />
        <p className="mt-2 text-sm text-gray-600">Loading blog posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="text-red-500 bg-red-50 px-6 py-4 rounded-lg">
          <p className="font-medium">Error loading blog posts</p>
          <p className="text-sm mt-1">{error}</p>
          <Button 
            onClick={fetchBlogs} // Retry fetching blogs
            variant="outline"
            className="mt-4 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:translate-y-[-4px]"
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.category}</span>
                </div>
                <h2 className="text-xl font-semibold mb-3">
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="text-gray-800 hover:text-[#7ab80e] transition-colors duration-200"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`}>
                  <Button
                    variant="outline"
                    className="w-full border-[#7ab80e] text-[#7ab80e] hover:bg-[#7ab80e] hover:text-white transition-colors duration-200"
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
