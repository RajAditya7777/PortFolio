import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import UiUxDesigns from './components/UiUxDesigns'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <Services />
        </section>
        <section id="technologies">
          <Technologies />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="uiux-designs">
          <UiUxDesigns />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
