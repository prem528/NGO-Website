import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../../assets/realistic.webp";

interface TestimonialProps {
  id: number;
  content: string;
  name: string;
  title: string;
  imageSrc: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  content,
  name,
  title,
  imageSrc,
}) => {
  return (
    <div className="px-4 py-10">
      <div className="bg-gray-300 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col">
        <div className="content">
          <p className="text-black text-justify mb-4 text-sm sm:text-base md:text-lg">
            {content}
          </p>
          <div className="flex items-center mt-4">
            <img
              src={imageSrc}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4"
              alt={name}
            />
            <div>
              <h4 className="font-semibold text-black text-md sm:text-base">
                {name}
              </h4>
              <p className="text-gray-600 text-sm sm:text-sm">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={onClick}
      aria-label="Next testimonials"
    >
      <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={onClick}
      aria-label="Previous testimonials"
    >
      <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
    </button>
  );
};

const NGOTestimonials: React.FC = () => {
    const testimonials = [
        {
          id: 1,
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee to make a type specimen book. It has survived not only five ged. It was in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          name: "Alison Burgas",
          title: "Product Designer",
          imageSrc: image,
        },
        {
          id: 2,
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee to make a type specimen book. It has survived not only five ged. It was in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          name: "Alison Burgas",
          title: "Product Designer",
          imageSrc: image,
        },
        {
          id: 3,
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee to make a type specimen book. It has survived not only five ged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          name: "Alison Burgas",
          title: "Product Designer",
          imageSrc: image,
        },
        {
          id: 4,
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee to make a type specimen book. It has survived not only five ged. It was in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          name: "Alison Burgas",
          title: "Product Designer",
          imageSrc: image,
        },
        {
          id: 5,
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee to make a type specimen book. It has survived not only five ged. It was in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          name: "Alison Burgas",
          title: "Product Designer",
          imageSrc: image,
        },
        {
          id: 6,
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee to make a type specimen book. It has survived not only five ged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          name: "Alison Burgas",
          title: "Product Designer",
          imageSrc: image,
        },
      ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-24 px-4 pt-10 sm:px-6 md:px-8 lg:px-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-3xl text-gray-400 italic">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl text-green-700 font-bold mt-2">
            What Our Clients Say
          </h2>
        </div>
        <div className="relative px-4 sm:px-0" data-aos="fade-up" data-aos-duration="1000">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.id} {...testimonial} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default NGOTestimonials;
