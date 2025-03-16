import react from 'react';

function Navbar() {
    return (
        <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
        <div className="container py-2 flex justify-center md:justify-between items-center">
<div className="text-2xl font-bold hidden md:inline text-blue-600">Tyrone Ty</div>

           <div className="space-x-6">
<a href="#home" className="text-blue-600">Home</a>

<a href="#about" className="text-blue-600">About</a>

<a href="#skills" className="text-blue-600">Skills</a>

<a href="#services" className="text-blue-600">Services</a>

<a href="#projects" className="text-blue-600">Projects</a>

<a href="#contact" className="text-blue-600">Contact</a>

           </div>
        </div>
        </nav>
    )
}

export default Navbar;
