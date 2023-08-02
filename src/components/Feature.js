import React from 'react'
import dapp from '../images/dap.png'

const Feature = () => {
  return (
    <div className='flex justify-center mx-auto  items-center  bg-white'>
        <div className='w-full  flex flex-col-reverse max-w-[1240px] px-3 justify-center items-center md:flex-row md:justify-between'>
            <div className='w-[100%] md:w-[50%]'>
                <img src={dapp} alt='/'className='w-[100%]'></img>
            </div>

            <div className='flex justify-center items-center md:items-start flex-col w-[100%] md:w-[50%]'>
                <h1 className='text-[#00df9a] font-bold text-2xl py-2'>ANALYTICAL AND IMPLEMENT</h1>
                <p className='text-[#3b3838bb] font-medium pr-4' >You open it directly in the browser, you will see an empty page.You can add webfonts, meta tags, or analytics to this file.The build step will place the bundled scripts into the</p>
                <button className='bg-[#00df9a] py-2 px-32 font-semibold rounded-xl mt-3 hover:bg-[#01aa74c4] hover:text-white '>Learn</button>
            </div>
        </div>
        

    </div>
  )
}

export default Feature
