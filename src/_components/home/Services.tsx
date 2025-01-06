import { Recycle, Droplet, TreesIcon as Tree, Share2 } from "lucide-react";
import earth from "../../assets/saveearthbg.png";

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

export default function Services() {
  return (
    <section className="py-16 px-24 bg-gradient-to-br from-green-200/30 to-transparent">
      {" "}
      {/* Reduced the top margin */}
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          {" "}
          {/* Reduced bottom margin */}
          <span className="text-3xl text-gray-5 00 font-light">Services</span>
          <div className="flex justify-center items-center gap-4 mt-4">
            <div className="h-px w-80 bg-green-300"></div>
          </div>
          <h2 className="text-4xl md:text-5xl text-green-700 font-bold mt-0">
            Promote Your Environment
          </h2>
        </div>

        {/* Services Section */}
        <div className="grid md:grid-cols-3 items-center px-24">
          {/* Left Column - First 2 Services */}
          <div className="space-y-12">
            {services.slice(0, 2).map((service, index) => (
              <div key={index} className={service.className}>
                <div className="flex md:justify-end gap-4 items-start">
                  <div className="flex-1 md:order-1">
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-500">{service.description}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-[#7ab80e] flex items-center justify-center text-[#7ab80e] md:order-2">
                    <service.icon size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column - Image */}
          <div className="relative mx-auto ">
            <div className="w-64 h-64 md:w-full md:h-80 ">
              <img
                src={earth}
                alt="Eco Globe with Plants"
                width={420}
                height={420}
                className="w-full h-full object-contain bg-transparent"
              />
            </div>
          </div>

          {/* Right Column - Last 2 Services */}
          <div className="space-y-12">
            {services.slice(2).map((service, index) => (
              <div key={index} className={service.className}>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full border-2 border-[#7ab80e] flex items-center justify-center text-[#7ab80e]">
                    <service.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-500">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
