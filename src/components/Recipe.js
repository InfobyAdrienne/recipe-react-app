import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
var API_KEY = process.env.REACT_APP_API_KEY

function Recipe({ id }) {
  const navigate = useNavigate();

  function goBack() {
    navigate("/");
  }

  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data[0].steps); // Access the steps array of the first object
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
      <button onClick={goBack}>Go Back</button> {/* Back button not working yet */}
    </div>
  );
}
export default Recipe;

