// src/components/About.js
import React from 'react';
import tyimage from '../images/tyler.jpg';
import tyucf from '../images/ty-ucf.jpg';
import tyseal from '../images/ty-seal.jpg';
import tyhorse from '../images/ty-knighto.jpg';

const About = () => {
  return (
    <section className="pb-16" id='about'>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-bold">Hi There I'm Tyler</h2>
          <h5 className="text-xl">I'm an aspring Full-Stack developer located in North Florida</h5>
        </div>
        <img
          src={tyhorse}
          alt="Tyler"
          className="h-[260px] w-[360px] rounded-full mt-2 mx-auto"
        />
       
      </div>
    </section>
  );
};

export default About;
