import React from "react";
import { useState } from "react";
import { useEffect } from 'react';

function Search() {
  const [ingredient, setIngredient] = useState("");
  const [meal, setMeal] = useState("");

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  const handleChange = (event) => {
    setIngredient(event.target.value);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  
  return (
      <div>
        <h1>Search for recipes!</h1>
        <form  onSubmit={}>
          <input   onChange={handleChange} type="text" placeholder="Search.."></input>
          <button  type="submit" value="Submit">Search</button>
        </form>
        </div>
        
    )
  
}
export default Search;