import { BentoGrid } from "../../components/ui/bento-grid";
import image from "../../assets/earth3.jpg";
import image1 from "../../assets/ngo.jpg";
import image2 from "../../assets/ngo11.jpg";
// import image3 from "../../assets/ngo22.mp4";
// import image4 from "../../assets/ngo33.mp4";
import image5 from "../../assets/recycle.jpg";
import image6 from "../../assets/ngo14.jpg";

const items = [
  {
    title: "",
    image: image,
  },
  {
    title: "The Digital Revolution",
    image: image1,
  },
  {
    title: "The Art of Design",
    image: image2,
  },
  {
    title: "The Power of Communication",
    image: image2,
  },
  {
    title: "The Pursuit of Knowledge",
    image: image6,
  },
  {
    title: "The Joy of Creation",
    image: image1,
  },
  {
    title: "The Spirit of Adventure",
    image: image5,
  },
];

export function Gallery() {
  return (
    <div className="py-10 ">
        <div className="text-center mb-16">
          <span className="text-3xl text-gray-400  italic">Our Work </span>
          <h2 className="text-4xl md:text-5xl text-green-700 font-bold mt-2">Gallery</h2>
        </div>
      <BentoGrid className="py-4">
        {items.map((item, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900 ${
              i === 3 || i === 6 ? "md:col-span-2" : ""
            }`}
          >
            {item.image.endsWith(".mp4") ? (
              <video
                src={item.image}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            )}
            {/* <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h3 className="text-white text-xl font-bold">{item.title}</h3>
          </div> */}
          </div>
        ))}
      </BentoGrid>
    </div>
  );
}
