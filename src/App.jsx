import React from 'react'
import Navbar from './components/Layout/Navbar'
import Hero from './components/Sections/Hero'
import About from './components/Sections/About'
import Services from './components/Sections/Services'
import CustomTailoring from './components/Sections/CustomTailoring'
import Gallery from './components/Sections/Gallery'
import Experience from './components/Sections/Experience'
import Features from './components/Sections/Features'
import Location from './components/Sections/Location'
import Contact from './components/Sections/Contact'
import Footer from './components/Layout/Footer'
const App = () => {
  return (
    <>
      <div className="bg-brand-cream text-brand-charcoal font-sans antialiased selection:bg-brand-gold selection:text-white">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <CustomTailoring />
        <Gallery />
        <Experience />
        <Features />
        <Location />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App