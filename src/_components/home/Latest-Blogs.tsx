import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import image from "../../assets/earth3.jpg";
import image1 from "../../assets/earth.jpg";
import image2 from "../../assets/recycle1.jpeg";
import background from "../../assets/blog1.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Sustaining Our Planet: A Call to Take Action",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when...",
    image: image,
    slug: "sustaining-our-planet",
  },
  {
    id: 2,
    title: "Green Initiatives for a Greener Tomorrow Future",
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

function LatestBlogs() {
  return (
    <section
      className="relative py-12 px-4 sm:px-6 md:py-16 md:px-12 lg:px-24 overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative container mx-auto" data-aos="fade-up" data-aos-duration="500">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xl md:text-2xl lg:text-3xl text-gray-300 italic block">
            News & Blogs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-green-700 font-bold mt-2">
            Latest Blogs From Our Vault
          </h2>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={"/blog"}
              className="group block"
            >
              <article className="rounded-lg overflow-hidden border transition-all duration-300 hover:border-[#7ab80e]/50 hover:shadow-lg hover:shadow-[#7ab80e]/5 bg-white">
                {/* Image */}
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Text Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#7ab80e] group-hover:text-[#7ab80e]/90">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full bg-[#7ab80e] text-black hover:bg-[#7ab80e]/90 hover:text-white hover:border-transparent"
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
export default LatestBlogs;