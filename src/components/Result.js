import React from "react";
import { useState } from "react";

function Result(id) {
    
  const [recipe, setRecipe] = useState("");

  function handleSubmit(submitEvent) {
    submitEvent.preventDefault();
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data);
        console.log(data);
      });
  }

  return (
    <div>
     console.log(recipe)
    </div>
  );
}
export default Result;
