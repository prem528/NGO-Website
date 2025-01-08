 
import { useState } from 'react'
import image from "../../assets/earth3.jpg";
import image1 from "../../assets/ngo.jpg";
import image2 from "../../assets/ngo11.jpg";
// import image3 from "../../assets/ngo22.mp4";
// import image4 from "../../assets/ngo33.mp4";
import image5 from "../../assets/recycle.jpg";
import image6 from "../../assets/ngo14.jpg";
 
 
 
import { Button } from '../../components/ui/button'
import { Dialog, DialogContent } from '../../components/ui/dialog'

type GalleryItem = {
  id: number
  title: string
  category: string
  image: string
  description: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Forest Conservation",
    category: "Nature",
    image: image,
    description: "Our efforts in preserving natural forest habitats."
  },
  {
    id: 2,
    title: "Clean Water Initiative",
    category: "Water",
    image: image1,
    description: "Working towards clean and accessible water for all."
  },
  {
    id: 3,
    title: "Wildlife Protection",
    category: "Wildlife",
    image: image2,
    description: "Protecting endangered species and their habitats."
  },
  {
    id: 4,
    title: "Renewable Energy",
    category: "Energy",
    image: image5,
    description: "Sustainable energy solutions for a better future."
  },
  {
    id: 5,
    title: "Ocean Cleanup",
    category: "Water",
    image: image2,
    description: "Keeping our oceans clean and healthy."
  },
  {
    id: 6,
    title: "Mountain Ecosystems",
    category: "Nature",
    image: image6,
    description: "Preserving mountain ecosystems and biodiversity."
  },
  {
    id: 7,
    title: "Solar Power",
    category: "Energy",
    image: image1,
    description: "Harnessing the power of the sun."
  },
  {
    id: 8,
    title: "Marine Life",
    category: "Wildlife",
    image: image,
    description: "Protecting marine ecosystems and species."
  },
  {
    id: 9,
    title: "Rainforest Protection",
    category: "Nature",
    image: image6,
    description: "Safeguarding our precious rainforests."
  }
]

const categories = ["All", "Nature", "Water", "Wildlife", "Energy"]

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <section className="py-16 px-24 md:py-24">
      <div className="container mx-auto px-20">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`
                ${selectedCategory === category 
                  ? 'bg-[#7ab80e] hover:bg-[#7ab80e]/90' 
                  : 'border-[#7ab80e] text-[#7ab80e] hover:bg-[#7ab80e] hover:text-white'
                }
              `}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                   
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-200 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl w-[90vw] p-1">
            {selectedImage && (
              <div>
                <div className="relative aspect-[16/9]">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-600">{selectedImage.description}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

