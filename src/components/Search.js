import React from "react";
import { useState } from "react";

function Search() {
  const [ingredient, setIngredient] = useState("");
  const [meal, setMeal] = useState([]);

  function handleChange(inputEvent) {
    setIngredient(inputEvent.target.value);
  }

  function handleSubmit(submitEvent) {
    submitEvent.preventDefault();
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMeal(data);
        console.log(data);
      });
  }
  
  // using meal.map to be able to have result printed on screen
  return (
    <div>
      <h1>Search for recipes!</h1>
      <form>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search.."
        ></input>
      </form>

      <form>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search.." 
        ></input>
     </form>

      <form>
        <input
          onChange={handleChange}
          type="text"
           placeholder="Search.."
        ></input>
      </form>

      <form onSubmit={handleSubmit}>
        <button type="submit" value="Submit">
          Search
        </button>
      </form>
      

    </div>

   
    
  );
}
export default Search;
