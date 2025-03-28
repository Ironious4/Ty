import React from "react";

function Services() {
    const services= [
        {
          id: 1,
          title: "Frontend Development",
          description: "Building responsive and interactive user interfaces.",
        },
        {
          id: 2,
          title: "Backend Development",
          description: "Developing robust server-side logic and databases.",
        },
        {
          id: 3,
          title: "Full-Stack Development",
          description: "Combining both frontend and backend development skills.",
        }
      ];

    return (
        <div className="bg-black text-white py-20" id="services">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
                transition-transform duration-300 hover:scale-105"
              >
                <div
                  className="text-right text-2xl font-bold text-blue-600"
                >
                  {service.id}
                </div>
                <h3 className="mt-2 text-2xl font-bold text-blue-600">
                  {service.title}
                </h3>
                <p className="mt-2 text-white-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}

export default Services;
