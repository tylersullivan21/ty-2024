import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaGithub } from 'react-icons/fa'; // Ensure these imports are correct

const skills = [
  { name: 'React', icon: <FaReact className="text-4xl text-blue-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-500" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-4xl text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3 className="text-4xl text-blue-300" /> },
  { name: 'GitHub', icon: <FaGithub className="text-4xl text-gray-800" /> },
];

const Home = () => {
  return (
    <div className="text-center">
      {/* Welcome Section */}
 

      {/* About Me Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-8">
            {/* Profile Picture */}
            <div className="mb-8 md:mb-0">
              <img
                src="https://via.placeholder.com/200" // Replace with your profile picture URL
                alt="Profile"
                className="w-40 h-40 object-cover rounded-full shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div className="md:max-w-lg">
              <h3 className="text-3xl font-bold mb-4">About Me</h3>
              <p className="text-lg mb-4">
                Hello! I’m a passionate web developer with a strong background in building scalable web applications. 
                I love creating interactive and user-friendly interfaces using the latest technologies.
              </p>
              <p className="text-lg mb-6">
                With a knack for problem-solving and a keen eye for design, I strive to deliver high-quality solutions 
                that meet the needs of users and businesses alike.
              </p>

              {/* Skills & Achievements */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-3">Skills & Achievements</h4>
                <ul className="list-disc list-inside text-left">
                  <li>5+ years of experience in web development</li>
                  <li>Proficient in JavaScript, React, Node.js</li>
                  <li>Experienced in building responsive and performant web applications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Projects Section */}
      <section className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h3 className="text-3xl font-semibold mb-4">Sample Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example project */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-2">Project One</h4>
            <p className="text-sm">A brief description of the project highlighting key features and technologies used.</p>
          </div>
          {/* Add more projects as needed */}
        </div>
      </section>

      {/* Skills & Technologies Section */}
      <section>
        <h3 className="text-3xl font-semibold mb-4">Skills & Technologies</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="mb-4">{skill.icon}</div>
              <h4 className="text-xl font-semibold">{skill.name}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
