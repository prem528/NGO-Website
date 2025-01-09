import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopBar } from "./_components/home/TopBar";
import { Header } from "./_components/home/Header";
import HeroSection from "./_components/home/HeroSection";
import { AboutUs } from "./_components/home/About-Us";
import Services from "./_components/home/Services";
import { OurWork } from "./_components/home/Our-Work";
import { ActionCards } from "./_components/home/ActionCards";
import { Events } from "./_components/home/Events";
import { Impact } from "./_components/home/Impact";
import { Volunteers } from "./_components/home/volunteers";
import { Gallery } from "./_components/home/Gallery";
import { Footer } from "./_components/home/Footer";
import { LatestBlogs } from "./_components/home/Latest-Blogs";
import { Banner } from "./_components/home/Banner";
 
import { GallerySection } from "./_components/Gallery/Gallery-Section";
import NGOTestimonials from "./_components/home/NGO-Testimonial";
import BlogPage from "./_components/blog/BlogPage";
import BlogPostPage from "./_components/blog/[slug]/page";
import ContactPage from "./_components/Contact/Contact-Page";
import DonatePage from "./_components/Donation/Donate-Page";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <Header />
        <main className=" ">
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
                  <NGOTestimonials/>
                  <LatestBlogs />
                  <Banner />
                </>
              }
            />

            <Route path="gallery" element={<GallerySection/>} />
            <Route path="/blog" element={<BlogPage/>} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/donate" element={<DonatePage/>} />
          </Routes>
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
