import React from 'react'
import { FaReact, FaPython, FaHtml5 } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import DecryptedText from './DecryptedText';
import { IoLogoJavascript } from "react-icons/io5";

const AboutSection = ({ id }) => {
  
  return (
    <div className='text-brightyellow pt-45  pb-90' id = {id}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
      <div className='Card'>
        <h2 className='pb-10'> / <DecryptedText text="ABOUT ME" /></h2>

        <p className='pb-10 mt-50'>
        Hi, I'm Lucy, I'm a second year computer science student at the University of Edinburgh.
        I enjoy programing but more specifically I have a growing interest in cybersecuirty. I'm particulary interested in how we can build secure
        , resilient systems that can protect users and data. I'm currently developing knowledge in areas like
        network security, cryptography and common attacks, and I'm excited to pursue a career where I can help
        safeguard the fast growing digital world.
        </p>

        <div className=' grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center'>
          <div className='LanguageTile'>
            <FaPython />
            PYTHON
          </div>
          <div className='LanguageTile'>
            <SiTailwindcss />
            TAILWIND
          </div>
          <div className='LanguageTile'>
            <FaHtml5 />
            HTML
          </div>
          <div className='LanguageTile'>
            <FaReact />
            REACT
          </div>
          <div className='LanguageTile'>
            <FaReact />
            JAVA
          </div>
          <div className='LanguageTile'>
            <IoLogoJavascript />
            JAVASCRIPT
          </div>
          <div className='LanguageTile'>
            <BiLogoMongodb />
            MONGODB
          </div>
        </div>
      </div>
      <div className='Card'>
          <h2 className=''> / <DecryptedText text="CERTIFICATES" /></h2>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
