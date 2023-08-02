import React from 'react'
import profile from '../images/profil.png'

const Profil = () => {
  return (
    <div className =''>
        <div className='mx-auto max-w-[1240px] flex justify-between flex-col items-center text-white md:flex-row'>
            <div className='w-[100%] md:w-[50%] flex flex-col mx-auto items-center md:items-start '>
                <h2 className='text-4xl py-4'>company</h2>
                <h1 className='uppercase text-[#00df9a] font-bold text-3xl'>Blockchain solution</h1>
                <p className='font-blod py-2 text-[#d0d0d0e4] mx-4 md:mx-auto'>The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it</p>
            </div>
            <div className='w-[100%] px-3 md:w-[50%]'>
                <img src={profile} alt='/' className='w-[100%]'></img>
            </div>
      
        </div>
    </div>
   
  )
}

export default Profil
