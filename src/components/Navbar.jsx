import React, { useEffect, useState } from 'react'
import {assets} from "../assets/assets"
import { Link } from 'react-router-dom'

const Navbar = () => {
const [showMobile,setShowMobile]=useState(false)

useEffect(()=>{
  if(showMobile){
    document.body.style.overflow='hidden'
  }else{
     document.body.style.overflow='auto'

  }
  return()=>{
    document.body.style.overflow='auto'

  }


},[showMobile])

  return (
    <div className=' absolute top-0 left-0 w-full z-10'>
      <div className=' container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent '>
        <img src={assets.logo} alt="" />
        <ul className=' hidden md:flex gap-7 text-white'>
          <a  href="#Header" className=' cursor-pointer hover:text-gray-400'>Home</a>
          <a  href="#About" className=' cursor-pointer hover:text-gray-400'>About</a>
          <a  href="#Associates" className=' cursor-pointer hover:text-gray-400'>Associates</a>
          <a  href="#Projects" className=' cursor-pointer hover:text-gray-400'>Projects</a>
          <a  href="#Testimonials" className=' cursor-pointer hover:text-gray-400'>Testimonials</a>

        </ul>
        <Link to={"/signin"}><button className=' hidden md:block  bg-blue-200 text-blue-800 px-8 py-2 rounded-full'>SignIn</button></Link>
        <img onClick={()=>setShowMobile(true)} src={assets.menu_icon}  className='md:hidden w-7 cursor-pointer' alt="" />
      </div>
      {/* -------------- */}
      <div className={`md:hidden ${showMobile ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`} >
        <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={()=>setShowMobile(false)} src={assets.cross_icon} className='w-6' alt="" />
        </div>
        <ul className=' flex flex-col items-center justify-center gap-2 mt-5 px-5 text-lg font-medium'>
          <a onClick={()=>setShowMobile(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a onClick={()=>setShowMobile(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
          <a onClick={()=>setShowMobile(false)} href="#Associates" className=' cursor-pointer hover:text-gray-400'>Associates</a>
          <a onClick={()=>setShowMobile(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Project</a>
          <a onClick={()=>setShowMobile(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
          <button className='  bg-blue-200 text-black px-8 py-2 rounded-full inline-block'>SignUp</button>

        </ul>
      </div>

    </div>
  )
}

export default Navbar