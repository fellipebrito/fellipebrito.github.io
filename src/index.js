import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Global styles
import App from './App'; // Root component
import DisplayCurrentURL from './Post'; // Import the DisplayCurrentURL component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Find the root element in the HTML
const rootElement = document.getElementById('root');
if (rootElement) {
  // Create a root container if the root element exists
  const root = ReactDOM.createRoot(rootElement);

  // Render the App component inside React's StrictMode for development.
  // StrictMode does not render any visible UI; it activates checks and warnings for its children.
  root.render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/in-english" element={<App />} />
          <Route path="/em-portugues" element={<App />} />
          <Route path="/:title" element={<DisplayCurrentURL />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
} else {
  // Log an error if the root element doesn't exist.
  console.error('Failed to find the root element: #root');
}
