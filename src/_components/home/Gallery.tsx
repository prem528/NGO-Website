import { Helmet } from "react-helmet-async";
import { BentoGrid } from "../../components/ui/bento-grid";
import image from "../../assets/earth3.jpg";
import image1 from "../../assets/ngo.jpg";
import image2 from "../../assets/ngo11.jpg";
import image5 from "../../assets/recycle.jpg";
import image6 from "../../assets/ngo14.jpg";

const items = [
  {
    title: "Earth Conservation",
    description: "Our efforts to protect the planet.",
    image: image,
  },
  {
    title: "The Digital Revolution",
    description: "Leveraging technology for social good.",
    image: image1,
  },
  {
    title: "The Art of Design",
    description: "Creative solutions for a better world.",
    image: image2,
  },
  {
    title: "The Power of Communication",
    description: "Spreading awareness through effective communication.",
    image: image2,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Educating communities for sustainable development.",
    image: image6,
  },
  {
    title: "The Joy of Creation",
    description: "Building a brighter future together.",
    image: image1,
  },
  {
    title: "The Spirit of Adventure",
    description: "Exploring innovative ways to make a difference.",
    image: image5,
  },
];

function Gallery() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Our Work Gallery",
    description: "A collection of images showcasing our impactful work.",
    image: items.map((item) => item.image),
  };

  return (
    <div className="py-10" data-aos="fade-up" data-aos-duration="500">
      {/* Add Meta Tags */}
      <Helmet>
        <title>Gallery - Our Work</title>
        <meta
          name="description"
          content="Explore our gallery showcasing the impactful work we do for the community and the environment."
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Gallery Header */}
      <div className="text-center mb-16">
        <span className="text-3xl text-gray-400 italic">Our Work </span>
        <h1 className="text-4xl md:text-5xl text-green-700 font-bold mt-2">
          Gallery
        </h1>
      </div>

      {/* Bento Grid */}
      <BentoGrid className="py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <figure
            key={i}
            className={`relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900 ${
              i === 3 || i === 6 ? "md:col-span-2" : ""
            }`}
          >
            <img
              src={item.image}
              alt={item.title} // Add descriptive alt text
              loading="lazy" // Lazy-load images
              className="w-full h-full object-cover"
            />
            <figcaption className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="text-center text-white p-4">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-sm mt-2">{item.description}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </BentoGrid>
    </div>
  );
}

export default Gallery;