import { motion } from "framer-motion";
import { Recycle, Droplet, TreesIcon as Tree, Share2 } from "lucide-react";
import earth from "../../assets/saveearthbg.png";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Recycling",
    icon: Recycle,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipnec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    title: "Eco System",
    icon: Droplet,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipnec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    title: "Organic",
    icon: Tree,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipnec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    title: "Biology",
    icon: Share2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipnec ullamcorper mattis, pulvinar dapibus leo.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const imageMotion = {
  hidden: { scale: 2, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      ref={ref}
      className="py-16 px-6 md:px-12 lg:px-24" data-aos="fade-up" data-aos-duration="500"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
          variants={fadeIn}
        >
          <span className="text-2xl md:text-3xl text-gray-400 italic">
            Services
          </span>
          <div className="flex justify-center items-center gap-4 mt-2">
            <div className="h-px w-32 md:w-64 bg-green-300"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-green-700 font-bold mt-4">
            Promote Your Environment
          </h2>
        </motion.div>

        {/* Services Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-12">
            {services.slice(0, 2).map((service, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                variants={fadeIn}
              >
                <motion.div
                  className="w-12 h-12 rounded-full border-2 border-[#7ab80e] flex items-center justify-center text-[#7ab80e] mb-4"
                  whileHover={{ scale: 1.2 }}
                >
                  <service.icon size={24} />
                </motion.div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-700">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center Column - Image */}
          <motion.div
            className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 1 }}
            variants={imageMotion}
          >
            <img
              src={earth}
              alt="Eco Globe with Plants"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Right Column */}
          <div className="space-y-12">
            {services.slice(2).map((service, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 + 0.4, duration: 0.8 }}
                variants={fadeIn}
              >
                <motion.div
                  className="w-12 h-12 rounded-full border-2 border-[#7ab80e] flex items-center justify-center text-[#7ab80e] mb-4"
                  whileHover={{ scale: 1.2 }}
                >
                  <service.icon size={24} />
                </motion.div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-700">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
