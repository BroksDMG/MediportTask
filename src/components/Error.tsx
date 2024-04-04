import React from 'react';
import { Typography, Container, CssBaseline } from '@mui/material';

export default function Error({ message }: { message: string }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Error</Typography>
        <Typography variant="h5" align="center"  gutterBottom>
        <p>{message}</p>
        </Typography>
        
      </Container>
    </React.Fragment>
  );
}
