import image from "../../assets/realistic.webp";

const testimonials = [
  {
    id: 1,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee to make a type specimen book. It has survived not only five ged. It was in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "Alison Burgas",
    role: "Product Designer",
    image: image,
     
  },
  {
    id: 2,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee to make a type specimen book. It has survived not only five ged. It was in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "Alison Burgas",
    role: "Product Designer",
    image: image,
  },
  {
    id: 3,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee to make a type specimen book. It has survived not only five ged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "Alison Burgas",
    role: "Product Designer",
    image: image,
  }
]

export function Testimonials() {
  return (
    <section className="py-10 px-24  bg-gradient-to-br from-green-50/30 to-transparent">
      <div className="container mx-auto px-24">
        <div className="text-center mb-16">
          <span className="text-3xl text-gray-400 font-light italic">Testimonials</span>
          <h2 className="text-4xl md:text-5xl text-green-700 font-bold mt-2">What Our Clients Say</h2>
          <div className="flex justify-center items-center gap-4 mt-4">
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-300 rounded-lg shadow-lg p-8 text-center"
            >
              <blockquote>
                <p className="text-black text-justify leading-relaxed mb-8">
                  {testimonial.content}
                </p>
                <footer className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-4 rounded-full overflow-hidden border-2 border-[#7ab80e]">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={64}
                      height={64}
                      className={`w-full h-full object-cover`}
                    />
                  </div>
                  <cite className="not-italic">
                    <div className="font-semibold text-gray-800 text-lg">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.role}
                    </div>
                  </cite>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

