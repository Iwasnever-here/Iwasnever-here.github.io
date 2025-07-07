import React from 'react'
import DecryptedText from './DecryptedText';
import { FaReact, FaPython, FaHtml5 } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from 'react-icons/io5';

const ProjectSection = ({ id }) => {
  return (
    <div id = {id}> 
      <div className='text-brightyellow'>
      <h2 className=''> / <DecryptedText text="PROJECTS" /></h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

        <div className='ProjectCard'> 
          <img src = "/assets/password-strength-checker-recording.gif" alt ="demo gif"/>
          / PASSWORD-STRENGTH-CHECKER
          <div className='icons'>
          <FaPython/>
          </div>
           <p className='text-neutral-600 text-base'> A simple python + tkinter password strength checker that makes use of the haveIbeenpwned API</p>
          <a className = 'text-xl hover:pointer' href = "https://github.com/Iwasnever-here/password-checker">/ view repository</a>
        </div>

        <div className='ProjectCard'> 
          <img src = "/assets/to-do-app-recording.gif"  alt ="demo gif"/>
          / TO-DO-APP
          <div className='icons '>
          <FaReact /><SiTailwindcss /> <BiLogoMongodb /> <IoLogoJavascript />
          </div>
            <p className='text-neutral-600 text-base'>A MERN stack todo app, with user authentication that allows users to login to see their todos</p>
          <a className = 'text-xl hover:pointer' href = "https://github.com/Iwasnever-here/to-do-app">/ view repository</a>
        </div>

        <div className='ProjectCard'> / PROJECT 03</div>
        <div className='ProjectCard'> / PROJECT 04</div>
        <div className='ProjectCard'> / PROJECT 05</div>

      </div>
    </div>
    </div>
  )
}

export default ProjectSection
