import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { EventContext } from '../EventContext';
import { Card, CardContent, Typography, Button, Grid, CardActions } from '@mui/material';

function EventList() {
  const { events, deleteEvent } = useContext(EventContext);
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Your Events</Typography>
      {events.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          No events created yet. Start by creating a new event!
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {events.map((event) => (
            <Grid item xs={12} sm={6} md={4} key={event.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{event.title}</Typography>
                  <Typography color="textSecondary">Date: {event.date}</Typography>
                  <Typography color="textSecondary">Location: {event.location}</Typography>
                  <Typography color="textSecondary">Budget: {event.budget} LEI</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(`/event/${event.id}`)}
                  >
                    View Details
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => deleteEvent(event.id)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default EventList;
