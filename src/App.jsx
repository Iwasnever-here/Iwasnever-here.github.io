import React from 'react'
import NavBar from './components/NavBar'
import './App.css'
import HeaderSection from './components/HeaderSection'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'
import LabsSection from './components/LabsSection'




const App = () => {
  return (
    <div className='bg-zinc-950 '>
      
      <NavBar /> 
      <div className='pl-7 pr-7 px-4'>
      <HeaderSection id="home" />
      <AboutSection id="about" />
      <ProjectSection id="projects" />
      <LabsSection id="labs" />
      <ContactSection id="contact" />
      </div>
        
     
      </div>
    
  )
}

export default App



