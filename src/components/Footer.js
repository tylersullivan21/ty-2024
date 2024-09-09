// src/components/Footer.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          © 2024 My Portfolio. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
