import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/button'
// import logo from "../../assets/logo1.png";


export function Header() {
  return (
    <nav className=" border-b bg-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-10 ">
        <div className=' text-xl font-bold px-24'>
        <Link to="/" className="">
        <h1>
          LOGO
        </h1>
          {/* <img src={logo} alt="Logo" width={80} height={40} /> */}
        </Link>
        </div>
       
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-gray-600 hover:text-[#7ab80e]">
              HOME
            </Link>
            <Link to="/pages" className="text-gray-600 hover:text-[#7ab80e]">
              PAGES
            </Link>
            <Link to="/gallery" className="text-gray-600 hover:text-[#7ab80e]">
              GALLERY
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-[#7ab80e]">
              BLOG
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-[#7ab80e]">
              CONTACT US
            </Link>
          </div>
          <Button className="bg-[#7ab80e] hover:bg-[#7ab80e]/90">BUY NOW</Button>
        </div>
      </div>
    </nav>
  )
}

