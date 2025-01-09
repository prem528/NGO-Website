import { ContactForm } from "./Contact-Form";
import { ContactInfo } from "./Contact-Info";
import image from "../../assets/contact.jpg"
import { Map } from "./Map";

export default function ContactPage() {
  return (
    <main>

      <div className="">
        {/* Hero Section */}
        <section className="relative py-20 bg-gray-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/35" />
            <img
              src={image}
              alt="Contact hero background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative container mx-auto px-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-gray-300">
                Get in touch with us for any inquiries, collaborations, or support. We're here to help!
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-gradient-to-br from-green-100/30 to-transparent">
          <div className="container mx-auto px-24">
            <div className="grid md:grid-cols-2 gap-12">
              <ContactForm />
              <div>
                <ContactInfo />
                <Map />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

