import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-green-600 mb-6">Contact Information</h2>
      <div className="space-y-4">
        <div className="flex items-start">
          <MapPin className="w-6 h-6 text-[#7ab80e] mr-3 mt-1" />
          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="text-gray-600">123 New Delhi, India</p>
          </div>
        </div>
        <div className="flex items-start">
          <Phone className="w-6 h-6 text-[#7ab80e] mr-3 mt-1" />
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p className="text-gray-600">+91 123-4567</p>
          </div>
        </div>
        <div className="flex items-start">
          <Mail className="w-6 h-6 text-[#7ab80e] mr-3 mt-1" />
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-gray-600">info@NGO.com</p>
          </div>
        </div>
        <div className="flex items-start">
          <Clock className="w-6 h-6 text-[#7ab80e] mr-3 mt-1" />
          <div>
            <h3 className="font-semibold">Working Hours</h3>
            <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
            <p className="text-gray-600">Saturday: 10am - 2pm</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

