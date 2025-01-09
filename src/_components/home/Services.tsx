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
    className: "md:text-right md:pr-10",
  },
  {
    title: "Eco System",
    icon: Droplet,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipnec ullamcorper mattis, pulvinar dapibus leo.",
    className: "md:text-right md:pr-10",
  },
  {
    title: "Organic",
    icon: Tree,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipnec ullamcorper mattis, pulvinar dapibus leo.",
    className: "md:text-left md:pl-10",
  },
  {
    title: "Biology",
    icon: Share2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipnec ullamcorper mattis, pulvinar dapibus leo.",
    className: "md:text-left md:pl-10",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const imageMotion = {
  hidden: { scale: 0.8, opacity: 0 },
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
    <section ref={ref} className="py-16 px-24 bg-gradient-to-br from-green-200/30 to-transparent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
          variants={fadeIn}
        >
          <span className="text-3xl text-gray-400 italic">Services</span>
          <div className="flex justify-center items-center gap-4 mt-4">
            <div className="h-px w-80 bg-green-300"></div>
          </div>
          <h2 className="text-4xl md:text-5xl text-green-700 font-bold mt-0">
            Promote Your Environment
          </h2>
        </motion.div>

        {/* Services Section */}
        <div className="grid md:grid-cols-3 items-center px-24">
          {/* Left Column - First 2 Services */}
          <div className="space-y-12">
            {services.slice(0, 2).map((service, index) => (
              <motion.div
                key={index}
                className={service.className}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                variants={fadeIn}
              >
                <div className="flex md:justify-end gap-4 items-start">
                  <motion.div
                    className="w-12 h-12 rounded-full border-2 border-[#7ab80e] flex items-center justify-center text-[#7ab80e] md:order-2"
                    whileHover={{ scale: 1.2 }}
                  >
                    <service.icon size={24} />
                  </motion.div>
                  <div className="flex-1 md:order-1">
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-500">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Column - Image */}
          <motion.div
            className="relative mx-auto"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 1 }}
            variants={imageMotion}
          >
            <div className="w-64 h-64 md:w-full md:h-80">
              <img
                src={earth}
                alt="Eco Globe with Plants"
                width={420}
                height={420}
                className="w-full h-full object-contain bg-transparent"
              />
            </div>
          </motion.div>

          {/* Right Column - Last 2 Services */}
          <div className="space-y-12">
            {services.slice(2).map((service, index) => (
              <motion.div
                key={index}
                className={service.className}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 + 0.4, duration: 0.8 }}
                variants={fadeIn}
              >
                <div className="flex gap-4 items-start">
                  <motion.div
                    className="w-12 h-12 rounded-full border-2 border-[#7ab80e] flex items-center justify-center text-[#7ab80e]"
                    whileHover={{ scale: 1.2 }}
                  >
                    <service.icon size={24} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-500">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
