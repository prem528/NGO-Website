import { BrowserRouter } from 'react-router-dom'
import { TopBar } from './_components/home/TopBar'
import { Header } from './_components/home/Header'
import HeroSection from './_components/home/HeroSection'
import { AboutUs } from './_components/home/About-Us'
import Services from './_components/home/Services'
import { OurWork } from './_components/home/Our-Work'
 

function App() {
  return (
    <BrowserRouter>
      <div>
        <TopBar />
        <Header/>
        <HeroSection/>
        <AboutUs/>
        <Services/>
        <OurWork/>
      </div>
    </BrowserRouter>
  )
}

export default App
