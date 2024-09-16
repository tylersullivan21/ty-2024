// src/components/About.js
import React from 'react';
import tyimage from '../images/tyler.jpg';

const About = () => {
  return (
    <section className="pb-16" id='about'>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-bold">Hi There I'm Tyler</h2>
          <h5 className="text-xl">I'm an aspring Full-Stack developer located in Florida</h5>
        </div>
        <img
          src={tyimage}
          alt="Tyler"
          className="h-[260px] w-[260px] rounded-full mt-2 mx-auto"
        />
      </div>
    </section>
  );
};

export default About;
