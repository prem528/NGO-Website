import { BlogPost as BlogPostType } from "../../lib/blog-data";

export const BlogPostComponent = ({ post }: { post: BlogPostType }) => {
  return (
    <article className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            {post.title}
          </h1>

          {/* Date and Category */}
          <div className="flex items-center justify-center text-sm text-gray-500 mb-8">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.category}</span>
          </div>

          {/* Image */}
          <div className="relative h-64 md:h-96 mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            {post.content.map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};