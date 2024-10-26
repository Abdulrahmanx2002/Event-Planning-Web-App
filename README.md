# Event Planning Web App

A web application that helps students plan and organize small or large events with friends and colleagues. This app allows users to create, view, and manage event details, including tracking food, drinks, and guest lists. Built using React, Context API, Material-UI, and React Router.

## Features

- **Create Events**: Users can create events by filling out details such as title, date, location, and budget.
- **View Events**: Users can view a list of all their created events on the home page.
- **Event Details**: Users can manage specific details of an event, including adding food, drinks, and guests.
- **Delete Events**: Users can delete events they no longer need.

## Project Structure

The project is divided into several key files, each responsible for a specific functionality within the app.

### Key Files and Their Functions

#### 1. `App.js`
- **Purpose**: Main entry point of the app.
- **Functionality**:
  - Sets up routes for different pages (Home, Create Event, Your Events, and Event Details).
  - Wraps the app in a `ThemeProvider` for consistent Material-UI styling.
  - Wraps the app in `EventProvider` to make event data accessible throughout the app.

#### 2. `EventContext.js`
- **Purpose**: Manages global state for all events using React's Context API.
- **Functionality**:
  - Defines `events` state, which holds the list of all events.
  - Provides functions to add a new event (`addEvent`) and delete an event (`deleteEvent`).
  - Allows components to access and modify the `events` state.

#### 3. `CreateEvent.js`
- **Purpose**: Renders a form that allows users to create a new event.
- **Functionality**:
  - Collects event data (title, date, location, and budget).
  - Validates data, ensuring date is not in the past and budget is a positive number.
  - Calls `addEvent` to add the new event to the global list and shows a success message.
  - Redirects to "Your Events" page after successful event creation.

#### 4. `EventList.js`
- **Purpose**: Displays all created events.
- **Functionality**:
  - Fetches events from `EventContext` and displays them in cards.
  - Each card has:
    - A "View Details" button to navigate to `EventDetails`.
    - A "Delete" button to remove the event.

#### 5. `EventDetails.js`
- **Purpose**: Allows users to view and edit event details, including food, drinks, and guests.
- **Functionality**:
  - Retrieves the event using the event ID from the URL.
  - Provides sections for managing "Food," "Drinks," and "Guests."
  - Users can add items, edit quantities, and save changes.
  - `Save Changes` button updates the event details in the global state.

#### 6. `Header.js`
- **Purpose**: Provides navigation across the app.
- **Functionality**:
  - Contains links to "Home," "Create Event," and "Your Events" pages.
  - Uses Material-UI `AppBar` for a consistent header design.

#### 7. `Footer.js`
- **Purpose**: Renders a simple footer at the bottom of the app.
- **Functionality**:
  - Displays static text (e.g., © 2024 Event Planning App).

#### 8. `index.js`
- **Purpose**: The root file of the React app.
- **Functionality**:
  - Renders the `App` component within the root div in `index.html`.
  - Wraps the app in `React.StrictMode` for development.

#### 9. `EventCard.js`
- **Purpose**: A reusable component to display individual event details in a card format.
- **Functionality**:
  - Displays event properties (title, date, location, budget).
  - Provides a "View Details" button to navigate to the event’s details page.
  - Used in `EventList.js` to render each event card.

#### 10. `App.css`
- **Purpose**: Contains custom CSS styles for the app.
- **Functionality**:
  - Provides additional styling to specific components for layout adjustments.

## Workflow

1. **Home Page (Event List)**:
   - Users can view a list of all created events, each displayed in a card.
   - Options to view details or delete the event are provided on each card.

2. **Create Event Page**:
   - Users fill out a form to create a new event.
   - On submission, the event is saved, and the user is redirected to the "Your Events" page.

3. **Your Events Page**:
   - Displays all events created by the user.
   - Each card allows users to "View Details" or delete the event.

4. **Event Details Page**:
   - Users can view and manage details of a specific event.
   - Allows adding or editing food, drinks, and guest lists, and saving changes.

## Technologies Used

- **React**: Frontend library for building UI components.
- **Context API**: For global state management across components.
- **Material-UI**: Provides styled React components for a polished UI.
- **React Router**: For managing page navigation in a single-page application (SPA).

## Installation

1. Clone the repository.
   ```bash
   git clone https://github.com/yourusername/event-planning-app.git
