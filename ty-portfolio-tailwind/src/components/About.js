// src/components/Home.js
import React from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import tyimage from'../images/tyler.jpg'
const About = () => {
  return (
 <section>

    <Grid container xs={12}  height='auto' pb={16}justifyContent='center'>
        
        <Grid container item xs={8} pt={4}  flexDirection='column' textAlign='center' justifyContent='start' alignContent='center' >
    <Typography variant='h2' pb={2}>
Hi There I'm Tyler
    </Typography>
    <Typography variant='h5'>
I'm a front end developer located in Florida USA
    </Typography>
    <img style={{height:'260px',marginTop:'2%', width:'260px', borderRadius:'50%',marginLeft:'auto', marginRight:'auto' }} src={tyimage}>
    </img>

        </Grid>

    </Grid>
 </section>
  );
};

export default About;
