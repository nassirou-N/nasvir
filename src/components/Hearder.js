import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Hearder = () => {
    const [nav, setnav] = useState(false)
    const hendnav = () => {
        setnav(!nav)
    }

  return (
    <header className='sticky z-20 top-0 bg-[#000300] '>
      <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto p-4 text-white'>
        <h1 className='text-4xl font-bold '>NAS<span className='text-[#00df9a]'>VIR.</span></h1>
        <ul className='hidden md:flex  '>
          <li className='p-4 text-bold cursor-pointer hover:text-[#7ff2cd]'>Home</li>
          <li className='p-4 text-bold cursor-pointer hover:text-[#7ff2cd]'>Company</li>
          <li className='p-4 text-bold cursor-pointer hover:text-[#7ff2cd]'>Resources</li>
          <li className='p-4 text-bold cursor-pointer hover:text-[#7ff2cd]'>About</li>
          <li className='p-4 text-bold cursor-pointer hover:text-[#7ff2cd]'>Contact</li>
        </ul>
        <div className='block md:hidden' onClick={hendnav}>
          {!nav ?  <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/> }
        
        </div>
        <ul className={ !nav ?('fixed left-[-100%] w-[60%]'):('md:hidden fixed top-24 left-0 w-[60%] h-screen ease-out duration-200 bg-black')}>
          <li className='p-4 border-b border-gray-500 text-bold cursor-pointer hover:text-[#7ff2cd] hover:border-[#7ff2cd]'>Home</li>
          <li className='p-4 border-b border-gray-500 text-bold cursor-pointer hover:text-[#7ff2cd] hover:border-[#7ff2cd]'>Company</li>
          <li className='p-4 border-b border-gray-500 text-bold cursor-pointer hover:text-[#7ff2cd] hover:border-[#7ff2cd]'>Resources</li>
          <li className='p-4 border-b border-gray-500 text-bold cursor-pointer hover:text-[#7ff2cd] hover:border-[#7ff2cd]'>About</li>
          <li className='p-4 border-b border-gray-500 text-bold cursor-pointer hover:text-[#7ff2cd] hover:border-[#7ff2cd]'>Contact</li>
        </ul>
      </div>
     
    </header>
  )
}

export default Hearder
