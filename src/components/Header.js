// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    
  
        <Grid container xs={12}  justifyContent='space-around' paddingTop='2%' paddingBottom='3%'>
            <Grid item>
          <Typography variant="h6" component="div">
            Ty Logo
          </Typography>
          </Grid>
          <Grid item >
          <Button style={{fontSize:'24px'}} color="inherit" component={Link} to="/">Home</Button>
          <Button style={{fontSize:'24px'}} color="inherit" component={Link} to="/about">About</Button>
          <Button style={{fontSize:'24px'}} color="inherit" component={Link} to="#projects">Projects</Button>
          </Grid>
        </Grid>
     
 
  );
};

export default Header;
