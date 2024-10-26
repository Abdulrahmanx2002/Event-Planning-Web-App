import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Event Planning App
        </Typography>
        <Button
          color="inherit"
          component={NavLink}
          to="/"
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? '#ffffff' : 'inherit',
          })}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to="/create-event"
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? '#ffffff' : 'inherit',
          })}
        >
          Create Event
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to="/your-events"  
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? '#ffffff' : 'inherit',
          })}
        >
          Your Events
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
