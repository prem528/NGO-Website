import { Facebook, Twitter, Linkedin, Youtube, MapPin, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/button'
 

export function Footer() {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' })
//   }

  return (
    <footer className="bg-gray-900 text-white px-24">
      {/* Main Footer */}
      <div className="container mx-auto px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <img
                src="/eco-logo-white.svg"
                alt=" Logo"
                width={120}
                height={40}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="text-gray-400 hover:text-[#7ab80e] transition-colors">
                <Facebook size={20} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-[#7ab80e] transition-colors">
                <Twitter size={20} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-[#7ab80e] transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-[#7ab80e] transition-colors">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Our Services', 'Latest Projects', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link 
                    to="#" 
                    className="text-gray-400 hover:text-[#7ab80e] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#7ab80e] mt-1" />
                <span>New Delhi, India</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#7ab80e]" />
                <span>+012 345 6789</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#7ab80e]" />
                <span>info@NGO.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive latest news on our services.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#7ab80e] text-gray-300"
              />
              <Button
                type="submit"
                className="w-full bg-[#7ab80e] hover:bg-[#7ab80e]/90"
              >
                SUBSCRIBE NOW
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()}  NGO Name. All Rights Reserved.
            </p> 
            {/* <div>
                <Button
              variant="ghost"
              size="icon"
              className="rounded-full item bg-[#7ab80e] hover:bg-[#7ab80e]/90 text-white "
              onClick={scrollToTop}
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
            </div> */}
            
          </div>
        </div>
      </div>
    </footer>
  )
}

