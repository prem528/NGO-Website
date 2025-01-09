import image from  "../../assets/donation.jpg"

 

export default function DonatePage() {
  return (
    <main>
      
      <div className="bg-gradient-to-b from-green-50 via-white to-green-50/30">
        {/* Hero Section */}
        <section className="relative py-20 bg-gray-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/25" />
            <img
              src={image}
              alt="Donate hero background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative container mx-auto px-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Donate Now
              </h1>
              <p className="text-lg text-gray-300">
                Your contribution helps us continue our mission to protect and preserve our planet. Every donation, big or small, makes a difference.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              
            </div>
          </div>
        </section>
      </div>
     
    </main>
  )
}

