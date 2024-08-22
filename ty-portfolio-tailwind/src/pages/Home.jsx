// src/components/Home.js
import React from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import tyimage from'../images/tyler.jpg'
import Tyinfo from '../components/Tyinfo';
import About from '../components/About';
import Header from '../components/Header';
import Projects from '../components/Projects';
const Home = () => {
  return (
  <main>
<Grid>
    <Header />
</Grid>
<Grid>
    <About />
</Grid>
<Grid backgroundColor='white' height='500px' alignContent='center'pb={20}>
    <Tyinfo/>
</Grid>


<Grid container xs={12} justifyContent='center' alignContent='center' backgroundColor='magenta' height='500px'>
    <Projects/>
</Grid>
</main>
  );
};

export default Home;
