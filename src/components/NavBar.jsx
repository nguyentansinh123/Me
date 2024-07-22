import React from 'react'
import Logo from './img/logo.svg'

const NavBar = () => {
  return (
    <nav className='relative container mx-auto p-6'>
        <div className="flex items-center justify-between">
            <div className="pt-2">
                <img src={Logo} alt="" />
            </div>

            <div className={`md:flex gap-x-6 hidden`}>
                <a href="" className='hover:text-darkGrayishBlue'>Pricing</a>
                <a href="" className='hover:text-darkGrayishBlue'>Product</a>
                <a href="" className='hover:text-darkGrayishBlue'>About Us</a>
                <a href="" className='hover:text-darkGrayishBlue'>Career</a>
                <a href="" className='hover:text-darkGrayishBlue'>Community</a>
            </div>

            <a href="" className='hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'>
                Get Started
            </a>
        </div>
    </nav>
    
  )
}

export default NavBar