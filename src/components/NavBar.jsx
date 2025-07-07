import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { HiDesktopComputer } from "react-icons/hi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className = 'bg-zinc-950 font-display fixed top-0 w-full pt-3 px-7 z-30'>
      <div className = 'h-10 items-center flex justify-between bg-brightyellow'>
        <div className='text-3xl text-zinc-950 font-bold px-4'><HiDesktopComputer /></div>
        {/* Desktop buttons*/}
        <div className='hidden sm:block'>
          <a href='#home' className='text-zinc-950 text-lg px-5' >HOME</a>
          <a href='#about' className='text-zinc-950 text-lg px-5 '>ABOUT</a>
          <a href='#projects' className='text-zinc-950 text-lg px-5' >PROJECTS</a>
          <a href='#labs' className='text-zinc-950 text-lg px-5' >LEARNING</a>
          <a href='#contact' className='text-zinc-950 text-lg px-5' >CONTACT</a>
        </div>
        <button onClick = {() => setIsOpen(!isOpen)} className='block sm:hidden px-4 text-3xl text-zinc-950'><GiHamburgerMenu /></button>
      </div>
      {/* mobile buttons*/}
      
      <div className={`${ isOpen ? "block" : "hidden"} sm:hidden bg-brightyellow space-y-2 pb-3`}>
          <a href='#home' className='text-zinc-950 text-lg px-5 block'>HOME</a>
          <a href='#about' className='text-zinc-950 text-lg px-5 block ' >ABOUT</a>
          <a href='#projects' className='text-zinc-950 text-lg px-5' >PROJECTS</a>
          <a href='#labs' className='text-zinc-950 text-lg px-5 block' >LABS</a>
          <a href='#contact' className='text-zinc-950 text-lg px-5 block' >CONTACT</a>
      </div>

    </nav>
    
  );
}

export default NavBar;

