import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CreateEvent from './components/CreateEvent';
import EventList from './components/EventList';
import EventDetails from './pages/EventDetails'; // Import EventDetails component
import { EventProvider } from './EventContext';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#9e9e9e' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <EventProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/your-events" element={<EventList />} />
            <Route path="/event/:eventId" element={<EventDetails />} /> {/* New Event Details route */}
          </Routes>
          <Footer />
        </EventProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
