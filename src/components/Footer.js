import React from 'react'
import { FaFacebookSquare, FaLinkedin,FaTwitter,FaGithub, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' mx-auto my-5 text-white flex md:justify-between flex-col md:flex-row  p-5'>
        <div className='flex items-start justify-center flex-col'>
            <h1 className='text-4xl font-bold '>NAS<span className='text-[#00df9a]'>VIR.</span></h1>
            <p className='py-3'>Lorem will still work, but they will point to the copied scripts s</p>
            <ul className='flex justify-around my-3 '>
            <li className='text-2xl pr-5'><FaTwitter /> </li>
            <li className='text-2xl pr-5'><FaLinkedin /></li>
            <li className='text-2xl pr-5'><FaFacebook /></li>
            <li className='text-2xl pr-5'><FaGithub /></li>
        </ul>
        </div>
       
        <div className='flex my-3 justify-around w-[100%] md:w-[80%]'>
            <div>
                <h3 className='font-medium text-gray-200 sm:text-xl md:text-2xl'>Solution</h3>
                <ul className=''>
                    <li className='py-2 text-sm'>Analytics </li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Trading</li>
                </ul>
            </div>
            <div>
                <h3 className='font-medium text-gray-200 sm:text-xl md:text-2xl'>Support</h3>
                <ul className=''>
                    <li className='py-2 text-sm'>Pricing </li>
                    <li className='py-2 text-sm'>Document</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>Api Status</li>
                </ul>
            </div>
            <div>
                <h3 className='font-medium text-gray-200 sm:text-xl md:text-2xl'>Company</h3>
                <ul className=''>
                    <li className='py-2 text-sm'>About </li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Careers</li>
                </ul>
            </div>
            <div>
                <h3 className='font-medium text-gray-200 sm:text-xl md:text-2xl '>Legal</h3>
                <ul className=''>
                    <li className='py-2 text-sm'>Claim </li>
                    <li className='py-2 text-sm'>Polity</li>
                    <li className='py-2 text-sm'>Terms</li>
                    <li className='py-2 text-sm'>Internat</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
