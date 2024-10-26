import React, { createContext, useState } from 'react';

export const EventContext = createContext();

export function EventProvider({ children }) {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, { ...newEvent, id: `${Date.now()}` }]);
  };

  const deleteEvent = (eventId) => {
    setEvents((prevEvents) => prevEvents.filter(event => event.id !== eventId));
  };

  return (
    <EventContext.Provider value={{ events, addEvent, deleteEvent }}>
      {children}
    </EventContext.Provider>
  );
}
