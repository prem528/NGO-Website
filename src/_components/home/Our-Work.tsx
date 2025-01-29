import { useEffect, useRef } from "react";
import { Recycle } from "lucide-react";
import { Button } from "../../components/ui/button";
import recycle from "../../assets/ngo.jpg";
import recycle1 from "../../assets/recycle.jpg";
import recycle2 from "../../assets/recycle1.jpeg";
import recycle3 from "../../assets/earth3.jpg";
import background from "../../assets/forest11.jpg";

const workItems = [
  {
    title: "Recycling Process",
    image: recycle,
    alt: "Plant growing in glass jar",
  },
  {
    title: "Recycling Process",
    image: recycle1,
    alt: "Recycling sign in nature",
  },
  {
    title: "Recycling Process",
    image: recycle2,
    alt: "Hands holding recycled materials",
  },
  {
    title: "Recycling Process",
    image: recycle3,
    alt: "Child planting trees",
  },
];

 function OurWork() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);
  return (
    <section className="relative py-16 px-4 sm:px-10 md:px-16 lg:px-24 overflow-hidden" 
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    >

      {/* Content */}
      <div className="relative container mx-auto px-10" data-aos="fade-up" data-aos-duration="500">
        <div className="text-center mb-16">
          <span className="text-3xl text-gray-300 italic">Our Work</span>
          <div className="flex justify-center items-center gap-4 mt-4">
            <div className="h-px w-80 bg-green-600"></div>
          </div>
          <h2 className="text-4xl md:text-5xl text-green-600 font-bold mt-2">
            What We Are Doing
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {workItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={item.image}
                alt={item.alt}
                width={400}
                height={500}
                className="w-full aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 mb-4 rounded-full border-2 border-[#7ab80e] flex items-center justify-center text-[#7ab80e]">
                  <Recycle size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <Button
                  variant="outline"
                  className="border-[#7ab80e] text-[#7ab80e] hover:bg-[#7ab80e] hover:text-white"
                >
                  LEARN MORE
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OurWork;