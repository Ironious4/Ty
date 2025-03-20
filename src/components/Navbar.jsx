import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black text-white px-8 md:px-16 lg:px-24 fixed top-0 left-0 w-full z-10"> {/* Increased margin-bottom */}
            <div className="container py-2 flex justify-center md:justify-between items-center">
                <div className="text-2xl font-bold text-blue-600 md:mx-0 mx-auto">Tyrone Ty</div>
                <div className="relative">
                    <button onClick={toggleDropdown} className="bg-blue-600 text-white-800 py-2 px-4 rounded hover:bg-blue-700">
                        Access Links
                    </button>
                    {isOpen && (
                       <div className="absolute bg-blue-900 text-white mt-2 rounded shadow-lg">

                            <a href="#home" className="block px-4 py-2">Home</a>
                            <a href="#about" className="block px-4 py-2">About</a>
                            <a href="#skills" className="block px-4 py-2">Skills</a>
                            <a href="#services" className="block px-4 py-2">Services</a>
                            <a href="#projects" className="block px-4 py-2">Projects</a>
                            <a href="#contact" className="block px-4 py-2">Contact</a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
