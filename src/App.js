import './App.css';
import Search from './components/Search';
import Navbar from './components/Navbar';
import React from 'react';
import About from './components/About';
import Recipe from './components/Recipe';
import { useState } from 'react';
import {Route, Routes } from "react-router-dom"

function App() {
  const [selectedMealId, setSelectedMealId] = useState(null); // Create state variable

  function handleMealClick(id) {
    setSelectedMealId(id); // Update state when meal is clicked
  }

  return (
    <>
        <Navbar/>
    <div class="nav-container">
      <Routes>
        <Route path="/about" element={<About/>} />
      </Routes>

    </div>
    <div className="container">
      <Search onMealClick={handleMealClick} />
      {selectedMealId && <Recipe id={selectedMealId} />}{" "}
      {/* Render Recipe component when selectedMealId is not null */}

    </div>
    </>
  );
}

export default App;
