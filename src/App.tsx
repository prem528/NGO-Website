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
import Testimonials from "./_components/home/Testimonials";
import { GallerySection } from "./_components/Gallery/Gallery-Section";

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
                  <Testimonials />
                  <LatestBlogs />
                  <Banner />
                </>
              }
            />

            <Route path="gallery" element={<GallerySection/>} />
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
