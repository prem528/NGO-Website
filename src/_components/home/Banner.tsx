import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

export function Banner() {
  return (
    <section className="bg-[#7ab80e] py-8 px-24">
      <div className="container mx-auto px-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl md:text-3xl lg:text-3xl text-white font-semibold text-center sm:text-left">
            Do You Care About The Earth Like We Do? Get Involved!
          </h2>
          <Link to="/volunteer">
            <Button 
              size="lg"
              className="bg-transparent text-lg text-white font-semibold border hover:text-black hover:bg-transparent "
            >
              BECOME A VOLUNTEER
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

