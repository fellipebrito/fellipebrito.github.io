import React from 'react';
import './App.css'; // Styles specific to the App component
import { Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation to access the URL
import Header from './Header'; // Component that lists posts
import PostsList from './PostsList'; // Component that lists posts

// The App component serves as the root of your application.
function App() {
  const location = useLocation();

  // Determine the language based on the URL path
  const language = location.pathname.startsWith('/em-portugues') ? 'pt' : 'en';

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Routes>
          <Route path="/in-english" element={<PostsList language="en" />} />
          <Route path="/em-portugues/*" element={<PostsList language="pt" />} />
          <Route path="/" element={<PostsList language={language} />} />
        </Routes>
      </header>
    </div>
  );
}

export default App; // Export App for use in index.js
