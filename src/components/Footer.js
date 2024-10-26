import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ mt: 'auto', py: 2 }}>
      <Typography variant="body2" align="center">
        © {new Date().getFullYear()} Event Planning App
      </Typography>
    </Box>
  );
}

export default Footer;
