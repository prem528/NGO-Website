

const testimonials = [
  {
    id: 1,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee to make a type specimen book. It has survived not only five ged. It was in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "Alison Burgas",
    role: "Product Designer",
    image: "/testimonials/person-1.jpg",
    imageStyle: "grayscale"
  },
  {
    id: 2,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee to make a type specimen book. It has survived not only five ged. It was in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "Alison Burgas",
    role: "Product Designer",
    image: "/testimonials/person-2.jpg"
  },
  {
    id: 3,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee to make a type specimen book. It has survived not only five ged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "Alison Burgas",
    role: "Product Designer",
    image: "/testimonials/person-3.jpg"
  }
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-green-50/30 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-3xl text-gray-400 font-light italic">Testimonials</span>
          <h2 className="text-4xl md:text-5xl text-gray-700 font-bold mt-2">What Our Clients Say</h2>
          <div className="flex justify-center items-center gap-4 mt-4">
            <div className="h-px w-12 bg-gray-300"></div>
            <div className="text-[#7ab80e]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.0007 5.10623C13.5507 3.30623 15.7307 2.29623 18.1207 2.29623C19.4607 2.29623 20.7407 2.62623 21.9007 3.22623C19.3007 0.986228 15.7907 -0.313772 11.9907 0.0862277C5.03066 0.816228 -0.139344 7.05623 0.000656393 14.0362C0.140656 21.0162 5.89066 26.7162 12.8707 26.8562C19.8507 26.9962 25.7207 21.5862 25.9807 14.6062C26.0607 12.5362 25.6507 10.5462 24.8507 8.75623C23.9407 9.59623 22.9107 10.3062 21.7707 10.8462C21.9107 11.5362 21.9807 12.2462 21.9807 12.9862C21.9807 18.1962 17.7507 22.4262 12.5407 22.4262C7.33066 22.4262 3.10066 18.1962 3.10066 12.9862C3.10066 7.77623 7.33066 3.54623 12.5407 3.54623C13.8107 3.54623 15.0107 3.81623 16.1007 4.30623C14.5607 4.45623 13.1607 4.99623 12.0007 5.10623Z"/>
              </svg>
            </div>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <blockquote>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {testimonial.content}
                </p>
                <footer className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-4 rounded-full overflow-hidden border-2 border-[#7ab80e]">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={64}
                      height={64}
                      className={`w-full h-full object-cover ${
                        testimonial.imageStyle === "grayscale" ? "grayscale" : ""
                      }`}
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

