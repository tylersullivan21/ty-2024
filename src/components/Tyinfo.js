// src/components/InfoAndTimeline.js
import React from 'react';

const timelineEvents = [

  {
    date: 'October 2023',
    title: 'Senior Programmer/Analyst Postion',
    description: 'Promoted into the Programmer/Analyst Positon',
    icon: '🚀',
  },
  {
    date: 'January 2021',
    title: 'Programmer/Analyst Postion',
    description: 'Promoted into the Programmer/Analyst Positon ',
    icon: '🚀',
  },
  {
    date: 'December 2020',
    title: 'Graduated from University of Central Florida',
    description: 'Completed a Bachelor Degree in Digital Media: Web Design with Cum Laude Honors',
    icon: '🎓',
  },
  {
    date: 'June 2017',
    title: 'Programmer/Analyst Intern',
    description: 'Started as an intern and shadowed Project Lead',
    icon: '📅',
  },
  // Add more events as needed
];

const InfoAndTimeline = () => {
  return (
    <section id="info-timeline" className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">My Journey</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Timeline Section */}
          <div className="relative">
            <div className="absolute left-1/2 w-px bg-gray-300 top-0 bottom-0 transform -translate-x-1/2" />
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex items-center">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl">
                    {event.icon}
                  </div>
                  {/* Timeline Content */}
                  <div className="w-full md:w-1/2 md:ml-auto md:pl-10">
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">{event.title}</h3>
                    <p className="text-gray-600 mb-2">{event.date}</p>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Information Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-3xl font-semibold mb-6 text-gray-700">About Me</h3>
            <p className="text-gray-700 mb-4">
              I am a passionate software developer with a strong background in web development and a keen interest in emerging technologies. 
              Over the years, I have developed a variety of skills and have worked on numerous projects that have honed my abilities. 
              I am always eager to take on new challenges and continually improve my craft.
            </p>
            <p className="text-gray-700 mb-4">
            When I'm not coding, I like to travel, take pictures, and recently have gotten into Weight Lifting.
            </p>
            {/* Add more information or sections as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoAndTimeline;
