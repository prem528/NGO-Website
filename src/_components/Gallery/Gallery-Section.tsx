import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Dialog, DialogContent } from "../../components/ui/dialog";

// Note: You'll need to properly import your images from your assets directory
// For this example, we'll use placeholder images
import image from "../../assets/earth3.jpg";
import image1 from "../../assets/ngo.jpg";
import image2 from "../../assets/ngo11.jpg";
import image5 from "../../assets/recycle.jpg";
import image6 from "../../assets/ngo14.jpg";

 
type GalleryItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Forest Conservation",
    category: "Nature",
    image: image,
    description: "Our efforts in preserving natural forest habitats.",
  },
  {
    id: 2,
    title: "Clean Water Initiative",
    category: "Water",
    image: image1,
    description: "Working towards clean and accessible water for all.",
  },
  {
    id: 3,
    title: "Wildlife Protection",
    category: "Wildlife",
    image: image2,
    description: "Protecting endangered species and their habitats.",
  },
  {
    id: 4,
    title: "Renewable Energy",
    category: "Energy",
    image: image5,
    description: "Sustainable energy solutions for a better future.",
  },
  {
    id: 5,
    title: "Ocean Cleanup",
    category: "Water",
    image: image2,
    description: "Keeping our oceans clean and healthy.",
  },
  {
    id: 6,
    title: "Mountain Ecosystems",
    category: "Nature",
    image: image6,
    description: "Preserving mountain ecosystems and biodiversity.",
  },
  {
    id: 7,
    title: "Solar Power",
    category: "Energy",
    image: image1,
    description: "Harnessing the power of the sun.",
  },
  {
    id: 8,
    title: "Marine Life",
    category: "Wildlife",
    image: image,
    description: "Protecting marine ecosystems and species.",
  },
  {
    id: 9,
    title: "Rainforest Protection",
    category: "Nature",
    image: image6,
    description: "Safeguarding our precious rainforests.",
  },
];

const categories = ["All", "Nature", "Water", "Wildlife", "Energy"];

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <main>
      <div>
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 md:py-24 bg-gray-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/35" />
            <img
              src={image2}
              alt="Contact hero background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative container mx-auto px-4 sm:px-8 lg:px-24">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                Gallery
              </h1>
              <p className="text-base sm:text-lg text-gray-300">
                Explore our initiatives and achievements.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-10 px-4 sm:px-8 md:py-16 lg:py-24 lg:px-24">
          <div className="container mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 md:mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`${
                    selectedCategory === category
                      ? "bg-[#7ab80e] hover:bg-[#7ab80e]/90"
                      : "border-[#7ab80e] text-[#7ab80e] hover:bg-[#7ab80e] hover:text-white"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                        <h3 className="text-lg font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-200 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Image Modal */}
            <Dialog
              open={!!selectedImage}
              onOpenChange={() => setSelectedImage(null)}
            >
              <DialogContent className="max-w-4xl w-[90vw] p-1">
                {selectedImage && (
                  <div>
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={selectedImage.image}
                        alt={selectedImage.title}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">
                        {selectedImage.title}
                      </h3>
                      <p className="text-gray-600">{selectedImage.description}</p>
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </section>
      </div>
    </main>
  );
};

export default GallerySection;