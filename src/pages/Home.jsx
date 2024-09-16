// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import tyimage from '../images/tyler.jpg';
import Tyinfo from '../components/Tyinfo';
import About from '../components/About';
import Header from '../components/Header';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <main className="space-y-20">
      <header className="bg-gray-100">
        <Header />
      </header>
      <section>
        <About />
      </section>
   {/*    <section className="bg-white h-[500px] flex items-center justify-center pb-20">
        <Tyinfo />
      </section> */}
      <section className="bg-white  flex items-center justify-center" >
        <Projects />
      </section>
    </main>
  );
};

export default Home;
