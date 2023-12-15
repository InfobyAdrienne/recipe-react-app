import React from "react";
import { useState } from "react";
import { useEffect } from "react";
var API_KEY = process.env.REACT_APP_API_KEY

function Recipe({ id }) {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data[0].steps); // Access the steps array of the first object
        console.log(data);
      });
  }, [id]); // Dependency array

  return (
    <div>
      <h1>Recipe</h1>
      <ul>
        {recipe.map((step) => (
          <li key={step.number}>{step.step}</li>
        ))}
      </ul>
    </div>
  );
}
export default Recipe;

