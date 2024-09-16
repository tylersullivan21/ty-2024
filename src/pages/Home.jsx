// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import tyimage from '../images/tyler.jpg';
import Tyinfo from '../components/Tyinfo';
import About from '../components/About';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <main className="">
      <header className="bg-gray-100">
        <Header />
      </header>
      <section className='py-16'>
        <About />
      </section>
  <section className="bg-white  flex items-center justify-center py-16 ">
        <Tyinfo />
      </section>  
      <section className="bg-#f9e4bc   flex items-center justify-center py-16" >
        <Skills/>
      </section>
      <section className="bg-white flex items-center justify-center py-16" >
        <Projects />
      </section>
      
      <section className="bg-white  flex items-center justify-center " >
        <Footer/>
      </section>
    </main>
  );
};

export default Home;
