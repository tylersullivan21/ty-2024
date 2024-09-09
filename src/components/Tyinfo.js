// src/components/Home.js
import React from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import tyimage from'../images/tyler.jpg'
const Tyinfo = () => {
  return (
 <section>

<Grid container xs={12}  justifyContent='center'>
        
        <Grid container item xs={10} sm={6} pt={4}  flexDirection='column' textAlign='center' justifyContent='center' alignContent='center' >
    <Typography variant='h4' pb={2}>
Hi There I'm Tyler
    </Typography>
    <Typography variant='h6'>
I have been working professionally as a Programmer/Analyst at some capacity for over the past 6 years in Alachua County. My daily I have been working professionally as a Programmer/Analyst at some capacity for over the past 6 years in Alachua County. My daily 
    </Typography>
   

        </Grid>

    </Grid>
 </section>
  );
};

export default Tyinfo;
