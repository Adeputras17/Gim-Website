import React from 'react';
import { Typography, Link, Container } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} Gym Website
        </Typography>
        <Typography variant="body2" align="center">
          <Link href="#">Privacy Policy</Link> | <Link href="#">Terms of Service</Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
