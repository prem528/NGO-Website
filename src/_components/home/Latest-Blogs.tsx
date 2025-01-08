import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import image from "../../assets/earth3.jpg";
import image1 from "../../assets/earth.jpg";
import image2 from "../../assets/recycle1.jpeg";
import background from "../../assets/blog1.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Sustaining Our Planet: A Call to take Action",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when...",
    image: image,
    slug: "sustaining-our-planet",
  },
  {
    id: 2,
    title: "Green Initiatives for a Greener Tomorrow",
    description:
      "There are many variations of passages of Lorem Ipsum, but the majority have in some form, by slightly believable.",
    image: image1,
    slug: "green-initiatives",
  },
  {
    id: 3,
    title: "Eco-Friendly Solutions for a Sustainable Future",
    description:
      "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything hidden...",
    image: image2,
    slug: "eco-friendly-solutions",
  },
];

export function LatestBlogs() {
  return (
    <section
      className="relative py-24 px-24 overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <div className="absolute inset-0 bg-black/70" />
 
      <div className="relative container mx-auto px-24">
        <div className="text-center mb-16">
          <span className="text-3xl text-gray-200 font-light italic">
            News & Blogs
          </span>
          <h2 className="text-4xl md:text-5xl text-green-700 font-bold mt-2">
            Latest Blogs From Our Vault
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="rounded-lg overflow-hidden border transition-all duration-300 hover:border-[#7ab80e]/50 hover:shadow-lg hover:shadow-[#7ab80e]/5">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-[#7ab80e] group-hover:text-[#7ab80e]/90">
                    {post.title}
                  </h3>
                  <p className="text-white mb-6 line-clamp-2">
                    {post.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full  bg-[#7ab80e] text-black hover:bg-[#7ab80e] hover:text-white hover:border-transparent"
                  >
                    READ MORE
                  </Button>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
