import React from 'react'
import map from '../images/map_green.png'

const Hero = () => {
  return (
    <div className='text-white px-5 mt-[-99px] w-full mx-auto h-screen max-w-[1240px] flex justify-center items-center flex-col md:flex-row md:my-'>
        <div className='mx- text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] p-2 font-bold'>INTEGRALLE CLOUD SECURITY</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold  md:py-6'>BEST AND ESSAY TO USE</h1>
            <div className='flex justify-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, flexible DAPP by  </p>
            </div>
        </div>
        <div className='mx-auto my-6 md:mx-9'>
            <img src={map} alt='/' />
        </div>
      
    </div>
  )
}

export default Hero
