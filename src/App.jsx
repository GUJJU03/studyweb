import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstSec from './Components/FirstSec'
import SecondSec from './Components/SecondSec'
import Navbar from './Components/Navbar'
import Thirdsec from './Components/Thirdsec'
import Footer from './Components/Footer'
import Hero from './Components/SecongPage/Hero'

function App() {

  return (
    <>
      {/* <Navbar/>
      <FirstSec/>
      <SecondSec/>
      <Thirdsec/>
      <Footer/> */}
      <Hero/>
    </>
  )
}

export default App
