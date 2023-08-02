import React from 'react'
import map from '../images/map_green.png'
import Typed from 'react-typed'

const Hero = () => {
   
   

  return (
    <div className='text-white px-5 mt-[-px]  w-full mx-auto h-screen max-w-[1240px] flex justify-center items-center flex-col md:flex-row md:my-[-99px]'>
        <div className='mx- text-center flex flex-col items-center justify-center'>
            <p className='text-[#00df9a] p-2 font-bold'>INTEGRALLE CLOUD SECURITY</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold  md:py-6'>BEST AND ESSAY TO USE</h1>
            <div className='flex justify-center'>
                <p className='md:text-4xl sm:text-3xl text-xl font-bold mr-1'>Fast, flexible</p>
                <Typed strings={["NFT","DeFi","Plateform"]} typeSpeed = {120} backSpeed = {140} loop className ='text-[#00df9a] md:text-4xl sm:text-3xl text-xl font-bold' />
            </div>
            <button className='bg-[#00df9a] my-5 py-2 w-[100%] hover:bg-[#03bd82e5] text-xl  rounded-lg font-bold md:w-[50%] '>Start</button>
        </div>
        <div className='mx-auto my-6 md:mx-9'>
            <img src={map} alt='/' />
        </div>
      
    </div>
  )
  
}


export default Hero
