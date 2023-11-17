import React from "react";
import { useState } from "react";
import { useEffect } from 'react';

function Search() {
  const [ingredient, setIngredient] = useState("");

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return (
        <h1>Search for recipes!</h1>
    )
  
}
export default Search;