import React from 'react'

import Header from './components/Header'
import About from './components/About'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import Testimonails from './components/Testimonails'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Searchbar from './pages/Searchbar'


const App = () => {
  return (
    <div className=' w-full overflow-hidden'>
     {/* <Header/>
     <About/>
     <Marquee/>
     <Projects/>
     <Testimonails/>
     <Contact/>
     <Footer/> */}
     <Searchbar/>
     
    </div>
  )
}

export default App