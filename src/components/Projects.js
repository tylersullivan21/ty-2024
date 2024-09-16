// src/components/Projects.js
import React from 'react';
import accrpscreenshot from '../images/accrp.PNG'; // Correctly import the image

// Sample project data
const projects = [
  {
    title: 'Alachua County Truth and Reconciliation',
    description: 'Educates and Informs citizens about Racial Injustice and history that occurred within  County',
    image: accrpscreenshot, // Use the image variable directly
    link: 'https://truth.alachuacounty.us/',
    tech:'Boostrap 5 (React)',
    role:'Frontend Dev'
    
  },
  {
    title: 'Kiosk Remote Dashboard',
    description: 'An internal application that allows apps team to remotely monitor/control active kiosks throughout Alachua County ',
    image: 'https://via.placeholder.com/300',
    link: '',
    tech:'Material UI / TailwindCSS',
    role:'Frontend Dev'
  },
 
  {
    title: 'WeatherStem Dashboard',
    description: 'A dashboard that aggregates weatherstem data from 7 locations throughout Alachua County. Dashboard is displayed on a wall at the Alachua County Emergency Operations Center',
    image: 'https://via.placeholder.com/300',
    link: '#',
    tech: 'Material UI',
    role:'Frontend Dev'
  },
  {
    title: 'Guardian ad litem',
    description: 'Come Back and Insert Info about project',
    image: 'https://via.placeholder.com/300',
    link: '#',
    tech: 'Material UI',
    role:''
  },
 
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Projects that I have Contributed to</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {projects.map((project, index) => (
          <a
            href={project.link}
            key={index}
            className="w-full sm:w-11/12 md:w-1/2 lg:w-1/3 xl:w-1/4 max-w-lg"
          >
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
              <div className="pl-6 pb-6" >
              <p className="text-gray-700 font-bold ">{project.tech}</p>
              </div>
              <div className="pl-6 pb-6" >
                <p className='text-gray-700 font-bold '>Role:</p>
              <p className="text-gray-700  underline decoration-1"> {project.role}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
