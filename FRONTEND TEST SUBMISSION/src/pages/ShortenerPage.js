import React from 'react';
import { Container, Typography, Box, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import ShortenerForm from '../components/ShortenerForm';

const ShortenerPage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, textAlign: 'center' }}>
      <Box sx={{ p: 4, borderRadius: 2, bgcolor: '#1e1e1e', boxShadow: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 1, color: '#ffffff' }}>
          URL Shortener
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph sx={{ color: '#bdbdbd' }}>
          Shorten up to 5 URLs and view their analytics.
        </Typography>
        <MuiLink component={Link} to="/stats" variant="button" sx={{ mt: 2, color: 'primary.main' }}>
          View Statistics
        </MuiLink>
      </Box>
      <Box sx={{ mt: 4 }}>
        <ShortenerForm />
      </Box>
    </Container>
  );
};

export default ShortenerPage;