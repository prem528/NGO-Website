import { BlogList } from "./blog-list"
import image from "../../assets/read.jpg";

export default function BlogPage() {
  return (
    <main>
 
      <div className="">
        {/* Hero Section */}
        <section className="relative py-20 bg-gray-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/45" />
            <img
              src={image}
              alt="Blog hero background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative container mx-auto px-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our Blog
              </h1>
              <p className="text-lg text-gray-300">
                Stay updated with our latest news, insights, and stories about environmental conservation and sustainable living.
              </p>
            </div>
          </div>
        </section>
        <div className="px-24">
            <BlogList />
        </div>
        
      </div>
    </main>
  )
}

