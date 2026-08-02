import React from 'react'
import './App.css'
import Navbar from './components/layout/Navbar' 
import PageBackground from './components/layout/PageBackground'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Project'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Footer from './sections/Footer'





const App = () => {
  return (
    <div >
      <PageBackground />
      <Navbar />
      

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}     
      


export default App


