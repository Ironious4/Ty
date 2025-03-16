import React from "react";

function About() {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src='./scenery.jpg'
            alt='scenery'
            className="w-78 h-100 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              Hi there, Tyrone here. So here is the deal, currently at 23 years old, I am a youngster diving into the deep world of tech.
            </p>
            <p className="text-lg mb-8">
              Once upon a time, I was into business and management but I soon shifted into tech due to my passion for contributing to solving real world problems.
              I noticed how much software programs and tech solutions as a whole have positively impacted lives of so many people around the globe and I decided that I wanted to be a part of it.
              Through my education in Software Engineering in Moringa school, I have been impressed by the technical and soft skills that I have gained. 
            </p>
            <p className="text-lg mb-8">
              I am one of the coolest software developers you will ever come across. 
              I specialize in both front-end and back-end development in pursuit of creating scalable and efficient full-stack web applications. 
            </p>
            <p className="text-lg mb-8">
              During my free time, I love doing workouts, travelling, listening to music, watching movies and reading novels(sometimes)
            </p>
            <div className="mt-12 flex justify-between text-center">
                <div>
                    <h3 className="text-2xl font-bold text-blue-600">
                        1+
                    </h3>
                    <p>Years Experience</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-blue-600">
                        3
                    </h3>
                    <p>Languages</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-blue-600">
                        2
                    </h3>
                    <p>Frameworks</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
