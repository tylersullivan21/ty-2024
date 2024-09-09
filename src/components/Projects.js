// src/components/Projects.js
import React from 'react';
import { Container, Grid, Typography, Card, CardContent, Link, CardMedia, Button } from '@mui/material';

// Sample project data
const projects = [
  {
    title: 'Alachua County Truth and Reconciliation',
    description: 'A brief description of project 1.',
    image: 'https://via.placeholder.com/300',
    link: 'https://truth.alachuacounty.us/'
  },
  {
    title: 'Kiosk Remote Dashboard',
    description: 'A brief description of project 2.',
    image: 'https://via.placeholder.com/300',
    link: 'https://mattfarley.ca/'
  },
  {
    title: 'Guardian Ad Litem',
    description: 'A brief description of project 3.',
    image: 'https://via.placeholder.com/300',
    link: '#'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
 <section id='projects'>
      <Typography variant="h4" component="h2" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4} justifyContent='center' >
        {projects.map((project, index) => (
          <Grid item xs={12} sm={10} md={4} key={index} minWidth='400px' >
            <Link href={project.link}>
            <Card>
             
              <CardContent>
                <Typography variant="h6" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
             
            </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
      </section>
  );
};

export default Projects;
