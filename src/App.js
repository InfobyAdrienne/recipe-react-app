import './App.css';
import Search from './components/Search';
import React from 'react';
import Recipe from './components/Recipe';
import { useState } from 'react';

function App() {
  const [selectedMealId, setSelectedMealId] = useState(null); // Create state variable

  function handleMealClick(id) {
    setSelectedMealId(id); // Update state when meal is clicked
  }

  return (
    <div className="container">
      <Search onMealClick={handleMealClick} />
      {selectedMealId && <Recipe id={selectedMealId} />}{" "}
      {/* Render Recipe component when selectedMealId is not null */}
    </div>
  );
}

export default App;
