// src/components/Home.js
import React from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import tyimage from'../images/tyler.jpg'
import About from '../components/About';
import Header from '../components/Header';
const Home = () => {
  return (
  <main>
<Grid>
    <Header />
</Grid>
<Grid>
    <About />
</Grid>
</main>
  );
};

export default Home;
