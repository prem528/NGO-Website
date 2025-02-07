import { MapPin, Mail, Phone, Facebook, Linkedin, Youtube, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TopBar() {
  return (
    <div className="w-full bg-[#7ab80e] text-white px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-2">
        <div className="gap-4 mb-2 sm:mb-0 hidden sm:flex">
          <Link to="#" className="hover:text-white/80">
            <Facebook />
          </Link>
          <Link to="#" className="hover:text-white/80">
            <Twitter />
          </Link>
          <Link to="#" className="hover:text-white/80">
            <Linkedin />
          </Link>
          <Link to="#" className="hover:text-white/80">
            <Youtube />
          </Link>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>1234567890</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>info@NGO.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Delhi</span>
          </div>
        </div>
      </div>
    </div>
  );
}