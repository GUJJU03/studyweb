import React from 'react'
import Hero from './SecongPage/Hero'

const Navbar = () => {
  return (
    <section>
      <nav className='bg-white border-solid border-y-2 border-black '>

        <div className="flex justify-between">
          <ul className='list-none flex justify-center'>
            <a href=""><li className='mx-3 p-4'>Home</li></a>
            <a href="/"><li className='mx-3 p-4'>Material</li></a>
            <a href=""> <li className='mx-3 p-4'>About Us</li></a>
            <a href=""><li className='mx-3 p-4'>Contact Us</li></a>
          </ul>

          <ul className='list-none flex '>
            <a href=""><li className='text-center p-4 border-x-2 border-x-black hover:bg-[#ff90e8]'>Sign in</li></a>
            <a href=""> <li className=' bg-black text-white p-4 hover:bg-[#ff90e8] hover:text-black'>Start Selling</li></a>
          </ul>


        </div>
      </nav>
    </section>
  )
}

export default Navbar
