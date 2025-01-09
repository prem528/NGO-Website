import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import video from "../../assets/background01.mp4";
import { Link } from "react-router-dom";


const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const gradientMotion = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function HeroSection() {
  return (
    <div className="relative py-8 overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content Section */}
      <div className="container relative mx-auto flex items-center justify-center px-4 py-20">
        <motion.div
          className="max-w-2xl text-white text-center pb-32  "
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: 0.5,
            duration: 1.2,
            ease: "easeInOut",
          }}
        >
          {/* Subtitle */}
          <motion.h2
            className="mb-4 text-3xl sm:text-4xl font-light"
            variants={fadeIn}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            Conversation Means
          </motion.h2>

          {/* Main Title */}
          <motion.h1
            className="mb-8 text-4xl sm:text-6xl font-bold italic text-gray-100 leading-tight"
            variants={fadeIn}
            transition={{ duration: 1.0, ease: "easeInOut" }}
          >
            Make an Impact & Give Back To{" "}
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-green-700 ml-1"
              initial="hidden"
              animate="visible"
              variants={gradientMotion}
              transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
            >
              NATURE
            </motion.span>
          </motion.h1>

          {/* Call to Action Button */}
          <Link to="/donate">
            <motion.div
              variants={fadeIn}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
              <Button size="lg" className="bg-[#7ab80e] hover:bg-[#7ab80e]/90">
                DONATE NOW
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
