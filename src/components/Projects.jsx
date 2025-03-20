import React from "react";

function Projects() {
    const projects = [
        {
          id: 1,
          name: "E-Commerce Product Cart",
          technologies: "Vanilla JS",
          image: "Product cart.png",
          github: "https://phase-1-project-virid-seven.vercel.app/",
        },
        {
          id: 2,
          name: "Next Watch",
          technologies: "React",
          image: "NextWatch.png",
          github: "https://next-watch-mu.vercel.app/",
        },
        {
          id: 3,
          name: "Bot Battlr",
          technologies: "React",
          image: "bots2.png",
          github: "https://bots-challenge-amber.vercel.app/",
        },
        {
          id:4,
          name: "Royal Bank of Flatiron",
          technologies: "React",
          image: "bank.png",
          github: "https://challenge-1-bank-of-flatiron-ruddy.vercel.app/"
        },
        {
          id:5,
          name: "Bookatopia",
          technologies: "React",
          image: "book.png",
          github: "https://bookatopia.vercel.app/Discover"
        },
        {
          id:6,
          name: "SupaCell",
          technologies: "React, Flask",
          image: "supacell.png",
          github: "https://supa-cell-frontend.vercel.app"
        },
        {
          id:7,
          name: "PizzaFace",
          technologies: "React, Flask",
          image: "pizzaface.png",
          github: "https://pizza-face-frontend.vercel.app"
        },
        {
          id:8,
          name: "Matwana Logistics Parcel Tracking System",
          technologies: "React, Flask",
          image: "matwana.png",
          github: "https://pts-frontend.vercel.app"
        }

      ];

    return (
        <div className="bg-black text-white-200 py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
<h2 className="text-4xl font-bold text-center text-blue-600 mb-12">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
<h3 className="text-2xl font-bold text-blue-600 mb-2">{project.name}</h3>

              <p className="text-gray-400 mb-4">{project.technologies}</p>
<a href={project.github} className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full" target="_blank" 

              rel="noopener noreferrer">Website</a>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}

export default Projects;
