import { ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import earth from "../../assets/earthimg1.jpg";

export function AboutUs() {
  return (
    <section className="py-16 md:py-16 px-24 bg-gradient-to-br from-green-200/30 to-transparent">
      <div className="container mx-auto px-24">
        <div className="text-center mb-12">
          <span className="text-3xl text-gray-500 font-light">About Us</span>
          <div className="flex justify-center items-center gap-4 mt-4">
            <div className="h-px w-80 bg-green-300"></div>
          </div>
          <h2 className="text-4xl md:text-5xl text-green-700 font-bold mt-2">
            Welcome To Green Eco Planet
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl text-gray-600 font-medium leading-relaxed">
              We are providing treatment by some experienced physicians
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesettie
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchangelease of Letraset sheets contaware
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <ul className="space-y-4">
              {[
                "Arts Programs",
                "Online skilled Courses",
                "Online Course Description",
                "Successful Growth In our Institution",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <ArrowRight className="text-[#7ab80e]" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-[#7ab80e] hover:bg-[#7ab80e]/90 text-white px-8">
              CONTACT US
            </Button>
          </div>
          <div className="flex justify-center">
            <img
              src={earth}
              alt="image"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
