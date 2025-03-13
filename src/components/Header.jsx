import React from 'react'
import Navbar from './Navbar'
import bg from "../assets/bg.jpg"

const Header = () => {
  return (
    <div className=' min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage:`url(${bg})`}} id='Header'>
        <Navbar/>
        <div className=' container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h2 className=' text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Find the <br /><span className='bg-gradient-to-r from-blue-300 to-blue-900 text-transparent bg-clip-text'>Perfect Space</span> <br />to Call Your Own</h2>
            <div className=' space-x-6 mt-16'>
                <a href="#Projects" className=' border border-white px-8 py-3 rounded-full '>Projects</a>
                <a href="#Contact" className=' bg-blue-200 text-blue-800 px-8 py-3 rounded-full '>Contact Us</a>
            </div>
        </div>
    </div>
  )
}

export default Header