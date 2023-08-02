import React from 'react'
import n1 from '../images/n1.jpg'
import n2 from '../images/n2.jpg'
import n3 from '../images/n3.jpg'
import king from '../images/king.jpg'

const CardN = () => {
  return (
    <div className='bg-white'>
        <div className=' w-max-[1240px] flex flex-col items-center justify-center'>
          <h1 className='my-5 text-4xl font-bold '>THE BEST NFT</h1>
          <div className='flex justify-center gap-5 items-center flex-wrap mx-auto py-[2rem]'>
              <div className='pointer  m-2 h-[700px] md:h-[380px] sm:w-[100%] md:w-[300px] bg-white  px-5 hover:scale-105 duration-300'>
                  <img src={n1} alt='' className='h-[70%] w-[100%] border rounded-t-2xl'></img>
                  <div className='h-[20%] border shadow-lg bg-white px-4'>
                    <h1 className='text-2xl py-1 uppercase font-extrabold text-[#00df9a]'>Vonko</h1>
                    <div className='flex justify-between '>
                      <p className=''>12/02/2023</p>
                      <p className='text-[#147154] text-xl font-black'>2 ETH</p>
                    </div>
                  </div>
                  <button className='bg-[#00df9a] w-[100%] py-2 border rounded-b-2xl font-bold hover:bg-[#03b57dd4] '>BUY</button>

              </div>
              <div className='pointer  m-2 h-[700px] md:h-[380px] sm:w-[100%] md:w-[300px] bg-white  px-5 hover:scale-105 duration-300'>
                  <img src={n2} alt='' className='h-[70%] w-[100%] border rounded-t-2xl'></img>
                  <div className='h-[20%] border shadow-lg bg-white px-4'>
                    <h1 className='text-2xl py-1 uppercase font-extrabold text-[#00df9a]'>Lokinez</h1>
                    <div className='flex justify-between '>
                      <p className=''>22/06/2023</p>
                      <p className='text-[#147154] text-xl font-black'>.025 ETH</p>
                    </div>
                  </div>
                  <button className='bg-[#00df9a] w-[100%] py-2 border rounded-b-2xl font-bold hover:bg-[#03b57dd4] '>BUY</button>

              </div>

              <div className='pointer  m-2 h-[700px] md:h-[380px] sm:w-[100%] md:w-[300px] bg-white  px-5 hover:scale-105 duration-300'>
                  <img src={n3} alt='' className='h-[70%] w-[100%] border rounded-t-2xl'></img>
                  <div className='h-[20%] border shadow-lg bg-white px-4 '>
                    <h1 className='text-2xl py-1 uppercase font-extrabold text-[#00df9a]'>Strakin</h1>
                    <div className='flex justify-between'>
                      <p className=''>02/07/2023</p>
                      <p className='text-[#147154] text-xl font-black'>5 ETH</p>
                    </div>
                  </div>
                  <button className='bg-[#00df9a] w-[100%] py-2 border rounded-b-2xl font-bold hover:bg-[#03b57dd4] '>BUY</button>

              </div>
              <div className='pointer m-2 h-[700px] md:h-[380px] sm:w-[100%] md:w-[300px] bg-white  px-5 hover:scale-105 duration-300'>
                  <img src={king} alt='' className='h-[70%] w-[100%] border rounded-t-2xl object-cover'></img>
                  <div className='h-[20%] border shadow-lg bg-white px-4'>
                    <h1 className='text-2xl py-1 uppercase font-extrabold text-[#00df9a]'>King black</h1>
                    <div className='flex justify-between '>
                      <p className=''>2/10/2023</p>
                      <p className='text-[#147154] text-xl font-black'>200 ETH</p>
                    </div>
                  </div>
                  <button className='bg-[#00df9a] w-[100%] py-2 border rounded-b-2xl font-bold hover:bg-[#03b57dd4] '>BUY</button>

              </div>

          </div>
        </div>
        
      
    </div>
  )
}

export default CardN
