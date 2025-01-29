import { Heart, Leaf, Users, Calendar } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import CountUp from "react-countup"; // Import CountUp
import { useInView } from "react-intersection-observer"; // Import useInView

const metrics = [
  {
    value: 50000, // Change to number
    label: "Trees Planted",
    icon: "Leaf",
  },
  {
    value: 10000, // Change to number
    label: "Children Helped",
    icon: "Heart",
  },
  {
    value: 100, // Change to number
    label: "VOLUNTEERS",
    icon: "Users",
  },
  {
    value: 200, // Change to number
    label: "CHARITY EVENTS",
    icon: "Calendar",
  },
];

const iconMap = {
  Leaf,
  Heart,
  Users,
  Calendar,
};

function Impact() {
  // Use the useInView hook to detect when the component is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  return (
    <section id="impact" className="py-12 px-4 md:px-12 lg:px-24 bg-[#7ab80e]">
      <div className="container">
        <div className="text-center mb-10 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Through the support of our donors and volunteers, we've made significant progress in our mission.
          </p>
        </div>

        <div
          ref={ref} // Attach the ref to the container
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4"
        >
          {metrics.map((metric) => {
            const Icon = iconMap[metric.icon as keyof typeof iconMap];
            return (
              <Card
                key={metric.label}
                className="shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <CardContent className="flex flex-col items-center text-center p-4 md:p-6">
                  <Icon className="h-10 w-10 mb-4 text-green-700" />
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">
                    {inView ? ( // Only render CountUp when in view
                      <CountUp
                        start={0} // Start counting from 0
                        end={metric.value} // End at the metric value
                        duration={1} // Duration of the animation in seconds
                        separator="," // Add commas for thousands
                      />
                    ) : (
                      "0" // Show 0 before the animation starts
                    )}
                  </h3>
                  <p className="text-sm md:text-base">{metric.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Impact;