import { Link } from "react-router-dom";
import { blogPosts } from "../../lib/blog-data";
import { Button } from "../../components/ui/button";

export function BlogList() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link to={`/blog/${post.slug}`}>
                <div className="relative h-48 md:h-64">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
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
                  <Link to={`/blog/${post.slug}`} className="text-gray-800 hover:text-[#7ab80e]">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`}>
                  <Button variant="outline" className="w-full border-[#7ab80e] text-[#7ab80e] hover:bg-[#7ab80e] hover:text-white">
                    Read More
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

