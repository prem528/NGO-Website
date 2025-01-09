import { Droplet, Leaf, TreePine, DollarSign } from "lucide-react";
import { Button } from "../../components/ui/button";
import image from "../../assets/earthimg2.png";

const features = [
  {
    icon: Droplet,
    title: "Save water from pollution",
    description:
      "Lorem ipsum dolor sit amet, consectetur lit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    icon: Leaf,
    title: "Make the world greener",
    description:
      "Lorem ipsum dolor sit amet, consectetur lit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    icon: TreePine,
    title: "Help to balance Eco system",
    description:
      "Lorem ipsum dolor sit amet, consectetur lit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    icon: DollarSign,
    title: "Collect the fund",
    description:
      "Lorem ipsum dolor sit amet, consectetur lit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];

export function Events() {
  return (
    <section className="py-20 px-24">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 gap-16 items-start px-24">
          {/* Left Column (1/3) */}
          <div className="space-y-6 lg:col-span-1">
            <div>
              <span className="text-4xl text-gray-400  italic">Our Work</span>
              <h2 className="text-4xl  text-gray-700 font-bold mt-2">
                Join Our Event And Help Us To Raise Funds
              </h2>
            </div>

            <div className="relative w-64 h-64 mx-auto lg:mx-0">
              <img
                src={image}
                alt="Hand holding eco globe"
                width={256}
                height={256}
                className="object-contain"
              />
            </div>

            <p className="text-gray-600 leading-relaxed">
              Capitalize on low hanging fruit to identify a ballpark value-added
              activity to beta test. Override the digital divide with additional
              clickthroughs from DevOps.
            </p>

            <Button className="bg-[#7ab80e] hover:bg-[#7ab80e]/90 text-white px-8">
              DONATE NOW
            </Button>
          </div>

          {/* Right Column (2/3) */}
          <div className="grid lg:col-span-2 md:grid-cols-2 pt-16 gap-16">
            {features.map((feature, index) => (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#7ab80e] flex items-center justify-center text-[#7ab80e]">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-700">
                  {feature.title}
                </h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
