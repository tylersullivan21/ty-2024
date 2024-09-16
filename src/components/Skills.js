// src/components/Skills.js
import React from 'react';
import { FaHtml5, FaReact, FaJsSquare, FaCss3Alt } from 'react-icons/fa'; // Import existing icons
import { SiBootstrap, SiNodedotjs } from 'react-icons/si'; // Import Bootstrap and Node.js icons

const skills = [
  {
    name: 'HTML',
    description: 'Markup language used to structure web pages.',
    icon: <FaHtml5 className="text-red-600 text-5xl" />, // HTML icon
  },
  {
    name: 'CSS',
    description: 'Style sheet language used for describing the presentation of a document written in HTML.',
    icon: <FaCss3Alt className="text-blue-600 text-5xl" />, // CSS icon
  },
  {
    name: 'JavaScript',
    description: 'Programming language used to create interactive effects within web browsers.',
    icon: <FaJsSquare className="text-yellow-500 text-5xl" />, // JavaScript icon
  },
  {
    name: 'React',
    description: 'A JavaScript library for building user interfaces, maintained by Facebook.',
    icon: <FaReact className="text-blue-600 text-5xl" />, // React icon
  },
  
  {
    name: 'Bootstrap',
    description: 'A framework for building responsive, mobile-first websites with HTML, CSS, and JavaScript.',
    icon: <SiBootstrap className="text-primary text-5xl" />, // Bootstrap icon
  },
  {
    name: 'Node.js',
    description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine for building scalable network applications.',
    icon: <SiNodedotjs className="text-green-600 text-5xl" />, // Node.js icon
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 from-gray-100 via-gray-200 to-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Skills/Tech I Use Daily</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center justify-center p-6 bg-gradient-to-r from-green-50 via-green-100 to-green-200">
                {skill.icon}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">{skill.name}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
