import React from 'react';

function Home() {
    return (
        <div className="bg-black text-white text-center py-16">
            <img src='./suit.jpg' alt='suit' className="mx-auto mb-8 w-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105" />
            <h1 className="text-3xl font-bold mb-2">
<span className="text-blue-500 bg-clip-text">I'm Tyrone Kariuki, a full-stack developer</span>

            </h1>
            <p className="mt-4 text-lg text-white-300 px-4 md:px-32">
                I specialize in building scalable and efficient web applications using a variety of technologies including Javascript, React, Python, Flask, and Tailwind CSS.
            </p>
            <div className="mt-8 space-x-4">
                <a href="/Tyrone Kariuki CV (2).pdf" download>
                    <button className="bg-blue-600 text-white-800 py-2 px-4 rounded hover:bg-blue-700">Download Resume</button>
                </a>

            </div>
        </div>
    )
}


export default Home;
