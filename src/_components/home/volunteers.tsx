import image from "../../assets/realistic.webp";

const volunteers = [
  {
    id: 1,
    name: "John Doe",
    role: "SOFTWARE ENGINEER",
    image: image,
  },
  {
    id: 2,
    name: "John Doe",
    role: "SOFTWARE ENGINEER",
    image: image
  },
  {
    id: 3,
    name: "John Doe",
    role: "SOFTWARE ENGINEER",
    image: image
  },
  {
    id: 4,
    name: "John Doe",
    role: "SOFTWARE ENGINEER",
    image: image
  }
]

export function Volunteers() {
  return (
    <section className="py-16 px-24 pt-4">
      <div className="container mx-auto px-24">
        <div className="text-center mb-16">
          <span className="text-3xl text-gray-400  italic">Projects</span>
          <h2 className="text-4xl md:text-5xl text-green-700 font-bold mt-2">Our volunteers</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {volunteers.map((volunteer) => (
            <div key={volunteer.id} className="text-center group">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                  src={volunteer.image}
                  alt={volunteer.name}
                  width={300}
                  height={400}
                  className={`w-full aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-105`}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{volunteer.name}</h3>
              <p className="text-sm text-gray-500 tracking-wider">{volunteer.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

