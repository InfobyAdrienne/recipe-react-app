import './App.css';
import Search from './components/Search';
import React from 'react';
import Recipe from './components/Recipe';
import Navigation from './components/Navigation';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [selectedMealId, setSelectedMealId] = useState(null); // Create state variable

  function handleMealClick(id) {
    setSelectedMealId(id); // Update state when meal is clicked
  }

  return (
    <Router>
      <div className="container">
        <Navigation />
        <Routes>
          <Route path="/" element={selectedMealId ? <Recipe id={selectedMealId} /> : <Search onMealClick={handleMealClick} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
