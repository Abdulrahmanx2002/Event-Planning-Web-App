import React, { useState, useContext } from 'react';
import { TextField, Button, Typography, Container, Paper, Snackbar, Alert } from '@mui/material';
import { EventContext } from '../EventContext';
import { useNavigate } from 'react-router-dom';

function CreateEvent() {
  const { addEvent } = useContext(EventContext); // Access the addEvent function from context
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    location: '',
    budget: '',
  });
  const [error, setError] = useState(''); // State to manage form validation errors
  const [openSnackbar, setOpenSnackbar] = useState(false); // State to control snackbar visibility
  const navigate = useNavigate(); // Hook for navigation after event creation

  // Function to handle input changes and update eventData state
  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  // Function to validate form fields before submission
  const validateForm = () => {
    const { date, budget } = eventData;

    // Check if the budget is a positive number
    if (Number(budget) <= 0) {
      setError('Budget must be a positive number.');
      return false;
    }

    // Check if the date is not in the past
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      setError('Date cannot be in the past.');
      return false;
    }

    // Reset error if validation passes
    setError('');
    return true;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form; return if validation fails
    if (!validateForm()) return;

    // Add event to context
    addEvent(eventData);

    // Show confirmation message and reset form
    setOpenSnackbar(true);
    setEventData({ title: '', date: '', location: '', budget: '' });

    // Redirect to Your Events page after a short delay
    setTimeout(() => navigate('/your-events'), 2000);
  };

  // Close the snackbar notification
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '40px' }}>
      <Paper elevation={3} style={{ padding: '30px' }}>
        <Typography variant="h4" gutterBottom>Create New Event</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth label="Event Title" name="title" value={eventData.title}
            onChange={handleChange} margin="normal" required
          />
          <TextField
            fullWidth label="Date" name="date" type="date" value={eventData.date}
            onChange={handleChange} margin="normal" InputLabelProps={{ shrink: true }} required
          />
          <TextField
            fullWidth label="Location" name="location" placeholder="e.g., Central Park, New York"
            value={eventData.location} onChange={handleChange} margin="normal" required
          />
          <TextField
            fullWidth label="Budget (LEI)" name="budget" type="number" placeholder="e.g., 1000"
            value={eventData.budget} onChange={handleChange} margin="normal" required
          />
          {error && (
            <Typography color="error" style={{ marginTop: '10px' }}>{error}</Typography>
          )}
          <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }} fullWidth>
            Create Event
          </Button>
        </form>
      </Paper>

      {/* Snackbar for successful event creation */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Event created successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default CreateEvent;
