import { blogPosts } from "../../../lib/blog-data"
import { BlogPost } from "../Blog-Post"
import { useParams } from "react-router-dom";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <main>
      <div className="bg-gradient-to-b from-green-50 via-white to-green-50/30">
        <BlogPost post={post} />
      </div>
    </main>
  )
}

