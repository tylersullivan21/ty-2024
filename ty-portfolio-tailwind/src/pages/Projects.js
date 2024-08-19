import React from 'react';

const Projects = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Example project */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Project Title</h3>
          <p className="mt-2">Description of the project.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
