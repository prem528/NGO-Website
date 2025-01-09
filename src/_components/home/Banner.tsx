import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

export function Banner() {
  return (
    <section className="bg-[#7ab80e] py-6 px-4 sm:py-8 sm:px-12 md:py-12 md:px-24">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Header Text */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold text-center sm:text-left">
            Do You Care About The Earth Like We Do? Get Involved!
          </h2>

          {/* Button */}
          <Link to="/volunteer">
            <Button
              size="lg"
              className="bg-transparent text-base sm:text-lg md:text-xl text-white font-semibold border-white border hover:text-black hover:bg-white transition-all"
            >
              BECOME A VOLUNTEER
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
