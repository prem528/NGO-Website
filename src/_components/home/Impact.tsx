import { Heart, Leaf, Users, Calendar } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
 
 

const metrics = [
  {
    value: "50,000+",
    label: "Trees Planted",
    icon: "Leaf"
  },
  {
    value: "10,000+",
    label: "Children Helped",
    icon: "Heart"
  },
  {
    value: "100+",
    label: "VOLUNTEERS",
    icon: "Users"
  },
  {
    value: "200+",
    label: "CHARITY EVENTS",
    icon: "Calendar"
  }
];

const iconMap = {
  Leaf,
  Heart,
  Users,
  Calendar,
};

export function Impact() {
  return (
    <section id="impact" className="py-12 px-4 md:px-12 lg:px-24 bg-[#7ab80e]">
      <div className="container">
        <div className="text-center mb-10 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Through the support of our donors and volunteers, we've made significant progress in our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {metrics.map((metric) => {
            const Icon = iconMap[metric.icon as keyof typeof iconMap];
            return (
              <Card key={metric.label} className="shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                <CardContent className="flex flex-col items-center text-center p-4 md:p-6">
                  <Icon className="h-10 w-10 mb-4 text-green-700" />
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">{metric.value}</h3>
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