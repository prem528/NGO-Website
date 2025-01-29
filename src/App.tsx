import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import Aos from "aos";
import "aos/dist/aos.css";
import { ActionCards } from "./_components/home/ActionCards";
import NGOTestimonials from "./_components/home/NGO-Testimonial";

const Header = lazy(() => import("./_components/home/Header"));
const HeroSection = lazy(() => import("./_components/home/HeroSection"));
const AboutUs = lazy(() => import("./_components/home/About-Us"));
const Services = lazy(() => import("./_components/home/Services"));
const OurWork = lazy(() => import("./_components/home/Our-Work"));
const Events = lazy(() => import("./_components/home/Events"));
const Impact = lazy(() => import("./_components/home/Impact"));
const Volunteers = lazy(() => import("./_components/home/volunteers"));
const Gallery = lazy(() => import("./_components/home/Gallery"));
const Footer = lazy(() => import("./_components/home/Footer"));
const LatestBlogs = lazy(() => import("./_components/home/Latest-Blogs"));
const Banner = lazy(() => import("./_components/home/Banner"));
const GallerySection = lazy(() => import("./_components/Gallery/Gallery-Section"));
const BlogPage = lazy(() => import("./_components/blog/BlogPage"));
const BlogPostPage = lazy(() => import("./_components/blog/[slug]/page"));
const ContactPage = lazy(() => import("./_components/Contact/Contact-Page"));
const DonatePage = lazy(() => import("./_components/Donation/Donate-Page"));
const Blogs = lazy(() => import("./_components/pages/Blogs"));
const CreateBlog = lazy(() => import("./_components/pages/CreateBlog"));
const Login = lazy(() => import("./_components/Admin/LoginPage"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <HelmetProvider>
      <Toaster position="top-center" />
      <ToastContainer />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <main>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <div className="relative">
                        <HeroSection />
                        <ActionCards />
                      </div>
                      <div className="pt-24">
                        <AboutUs />
                      </div>
                      <Services />
                      <OurWork />
                      <Events />
                      <Impact />
                      <Gallery />
                      <Volunteers />
                      <NGOTestimonials />
                      <LatestBlogs />
                      <Banner />
                    </>
                  }
                />
                <Route path="gallery" element={<GallerySection />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/donate" element={<DonatePage />} />
                <Route path="/all-blogs" element={<Blogs />} />
                <Route path="/create-blog" element={<CreateBlog />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>
            <Footer />
          </Suspense>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;