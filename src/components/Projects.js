// src/components/Projects.js
import React from 'react';
import accrpscreenshot from '../images/accrp.PNG'; // Correctly import the image

// Sample project data
const projects = [
  {
    title: 'Alachua County Truth and Reconciliation',
    description: 'Educates and Informs citizens about Racial Injustice and history that occurred within County',
    image: accrpscreenshot, // Use the image variable directly
    link: 'https://truth.alachuacounty.us/',
    tech: 'Bootstrap 5 (React)',
    role: 'Frontend Dev',
  },
  {
    title: 'Kiosk Remote Dashboard',
    description: 'An internal application that allows the apps team to remotely monitor/control active kiosks throughout Alachua County',
    image: 'https://via.placeholder.com/300',
    link: '',
    tech: 'Material UI / TailwindCSS',
    role: 'Frontend Dev',
  },
  {
    title: 'WeatherStem Dashboard',
    description: 'A dashboard that aggregates WeatherStem data from 7 locations throughout Alachua County. Dashboard is displayed on a wall at the Alachua County Emergency Operations Center',
    image: 'https://via.placeholder.com/300',
    link: '#',
    tech: 'Material UI',
    role: 'Frontend Dev',
  },
  {
    title: 'Guardian ad Litem',
    description: 'Come Back and Insert Info about project',
    image: 'https://via.placeholder.com/300',
    link: '#',
    tech: 'Material UI',
    role: '',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 ">
      <h2 className="text-4xl font-bold text-center mb-12">Projects I Have Contributed To</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-2">{project.description}</p>
                <p className="text-gray-700 font-bold">{project.tech}</p>
                <div className="mt-2">
                  <p className="text-gray-700 font-bold">Role:</p>
                  <p className="text-gray-700">{project.role}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
