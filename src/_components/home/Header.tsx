import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../../components/ui/button";
import { TopBar } from "./TopBar";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { authActions, RootState } from "../../redux/store";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);

  // Redux state and hooks
  let isLogin = useSelector((state: RootState) => state.isLogin);
  isLogin = Boolean(isLogin || localStorage.getItem("userId"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowTopBar(currentScrollY <= lastScrollY || currentScrollY < 50);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Logout handler
  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      toast.success("Logout Successfully");
      navigate("/login");
      localStorage.clear();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* TopBar with smooth hide/show effect */}
      <div
        className={`transition-transform duration-1000 bg-white ${
          showTopBar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <TopBar />
      </div>

      {/* Header Navigation */}
      <nav className="sticky top-0 bg-white shadow z-50">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 py-4">
          <div className="text-xl font-bold">
            <Link to="/" className="">
              <h1>LOGO</h1>
            </Link>
          </div>

          {/* Toggle Button for Mobile */}
          <div className="sm:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Menu Items */}
          <div
            className={`absolute sm:relative left-0 right-0 top-full sm:top-auto bg-white sm:bg-transparent p-4 sm:p-0 shadow-md sm:shadow-none flex flex-col sm:flex-row items-center gap-4 sm:gap-8 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible sm:opacity-100 sm:visible"
            }`}
          >
            <Link
              to="/"
              className="text-gray-600 hover:text-[#7ab80e] text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              to="/gallery"
              className="text-gray-600 hover:text-[#7ab80e] text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              GALLERY
            </Link>
            <Link
              to="/blog"
              className="text-gray-600 hover:text-[#7ab80e] text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              BLOG
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-[#7ab80e] text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT US
            </Link>
            {isLogin ? (
              <>
              <Button className="bg-blue-500 hover:bg-blue-600">
              <Link
                  to="/all-blogs"
                  className="text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin 
                </Link>
              </Button>

                {/* <Link
                  to="/create-blog"
                  className="text-gray-600 hover:text-[#7ab80e] text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Create Blog
                </Link> */}
                <Button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 w-full sm:w-auto"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
              <Button className="bg-green-500 hover:bg-green-600">
              <Link
                  to="/login"
                  className="text-gray-600 hover:text-white text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              </Button>

 
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
