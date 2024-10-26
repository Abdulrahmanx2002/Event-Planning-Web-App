import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { EventContext } from '../EventContext';
import { TextField, Button, Typography, List, ListItem, Container, Paper, Divider } from '@mui/material';

function EventDetails() {
  const { eventId } = useParams();
  const { events, addEvent } = useContext(EventContext);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const foundEvent = events.find(e => e.id === eventId);
    setEvent(foundEvent);
  }, [eventId, events]);

  if (!event) return <Typography>Loading...</Typography>;

  const handleAddFood = () => {
    setEvent({
      ...event,
      food: [...(event.food || []), { name: '', quantity: '' }]
    });
  };

  const handleAddDrink = () => {
    setEvent({
      ...event,
      drinks: [...(event.drinks || []), { name: '', quantity: '' }]
    });
  };

  const handleAddGuest = () => {
    setEvent({
      ...event,
      guests: [...(event.guests || []), { name: '' }]
    });
  };

  const handleSaveChanges = () => {
    const updatedEvents = events.map(e => (e.id === eventId ? event : e));
    addEvent(updatedEvents);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>{event.title}</Typography>
        <Typography variant="subtitle1">Date: {event.date}</Typography>
        <Typography variant="subtitle1">Location: {event.location}</Typography>
        <Typography variant="subtitle1">Budget: {event.budget} LEI</Typography>

        <Divider style={{ margin: '20px 0' }} />

        {/* Food Section */}
        <Typography variant="h6">Food</Typography>
        <List>
          {(event.food || []).map((food, index) => (
            <ListItem key={index}>
              <TextField
                label="Food Item"
                value={food.name}
                onChange={(e) => {
                  const newFood = [...event.food];
                  newFood[index].name = e.target.value;
                  setEvent({ ...event, food: newFood });
                }}
                fullWidth
              />
              <TextField
                label="Quantity"
                type="number"
                value={food.quantity}
                onChange={(e) => {
                  const newFood = [...event.food];
                  newFood[index].quantity = e.target.value;
                  setEvent({ ...event, food: newFood });
                }}
                style={{ marginLeft: '10px', width: '80px' }}
              />
            </ListItem>
          ))}
        </List>
        <Button variant="outlined" onClick={handleAddFood}>Add Food Item</Button>

        <Divider style={{ margin: '20px 0' }} />

        {/* Drinks Section */}
        <Typography variant="h6">Drinks</Typography>
        <List>
          {(event.drinks || []).map((drink, index) => (
            <ListItem key={index}>
              <TextField
                label="Drink Item"
                value={drink.name}
                onChange={(e) => {
                  const newDrinks = [...event.drinks];
                  newDrinks[index].name = e.target.value;
                  setEvent({ ...event, drinks: newDrinks });
                }}
                fullWidth
              />
              <TextField
                label="Quantity"
                type="number"
                value={drink.quantity}
                onChange={(e) => {
                  const newDrinks = [...event.drinks];
                  newDrinks[index].quantity = e.target.value;
                  setEvent({ ...event, drinks: newDrinks });
                }}
                style={{ marginLeft: '10px', width: '80px' }}
              />
            </ListItem>
          ))}
        </List>
        <Button variant="outlined" onClick={handleAddDrink}>Add Drink Item</Button>

        <Divider style={{ margin: '20px 0' }} />

        {/* Guests Section */}
        <Typography variant="h6">Guests</Typography>
        <List>
          {(event.guests || []).map((guest, index) => (
            <ListItem key={index}>
              <TextField
                label="Guest Name"
                value={guest.name}
                onChange={(e) => {
                  const newGuests = [...event.guests];
                  newGuests[index].name = e.target.value;
                  setEvent({ ...event, guests: newGuests });
                }}
                fullWidth
              />
            </ListItem>
          ))}
        </List>
        <Button variant="outlined" onClick={handleAddGuest}>Add Guest</Button>

        <Divider style={{ margin: '20px 0' }} />

        <Button variant="contained" color="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Paper>
    </Container>
  );
}

export default EventDetails;
