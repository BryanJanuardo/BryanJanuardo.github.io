import React from 'react'
import { useState } from 'react';
const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    };
    
    return (
        <div>
        <nav className="p-4 w-full text-white bg-dark">
            <div className="h-full container mx-auto flex justify-between items-center">
                <ul className="h-full hidden md:flex space-x-8">
                <li className='h-full hover:underline underline-offset-8 transition duration-300 ease-in-out'><a href="#introduction">Home</a></li>
                <li className='h-full hover:underline underline-offset-8 transition duration-300 ease-in-out'><a href="#projects">Projects</a></li>
                <li className='h-full hover:underline underline-offset-8 transition duration-300 ease-in-out'><a href="#experiences">Experiences</a></li>
                <li className='h-full hover:underline underline-offset-8 transition duration-300 ease-in-out'><a href="#certificates">Certificates</a></li>
                <li className='h-full hover:underline underline-offset-8 transition duration-300 ease-in-out'><a href="#researches">Researches</a></li>
                </ul>
            </div>

            <div className="md:hidden">
                <button onClick={toggleMenu} id="menuBtn" className="text-white focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
                </svg>
                </button>
            </div>

            <div id="menu" className={`md:hidden mt-4 ${menu ? '' : 'hidden'}`}>
                <a href="#" className="block py-2 text-white text-lg hover:bg-lightdark transition duration-300 ease-in-out">Home</a>
                <a href="#" className="block py-2 text-white text-lg hover:bg-lightdark transition duration-300 ease-in-out">Experiences</a>
                <a href="#" className="block py-2 text-white text-lg hover:bg-lightdark transition duration-300 ease-in-out">Projects</a>
                <a href="#" className="block py-2 text-white text-lg hover:bg-lightdark transition duration-300 ease-in-out">Certificates</a>
                <a href="#" className="block py-2 text-white text-lg hover:bg-lightdark transition duration-300 ease-in-out">Researches</a>
            </div>
        </nav>
        </div>
    )
}

export default Navbar
