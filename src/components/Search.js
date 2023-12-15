import React from "react";
import { useState } from "react";
var API_KEY = process.env.REACT_APP_API_KEY

function Search({ onMealClick }) {
  const [ingredient, setIngredient] = useState("");
  const [ingredient2, setIngredient2] = useState("");
  const [ingredient3, setIngredient3] = useState("");

  const [mealData, setMealData] = useState([]);

  function handleChange(inputEvent) {
    setIngredient(inputEvent.target.value);
  }

  function handleChange2(inputEvent) {
    setIngredient2(inputEvent.target.value);
  }

  function handleChange3(inputEvent) {
    setIngredient3(inputEvent.target.value);
  }

  function handleSubmit(submitEvent) {
    submitEvent.preventDefault();
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient},${ingredient2},${ingredient3}&apiKey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
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
          placeholder="Ingredient 1"
        ></input>
        <input
          onChange={handleChange2}
          type="text"
          placeholder="Ingredient 2"
        ></input>
        <input
          onChange={handleChange3}
          type="text"
          placeholder="Ingredient 3"
        ></input>
      </form>

      <form onSubmit={handleSubmit}>
        <button type="submit" value="Submit">
          Search
        </button>
        {mealData.map((meal) => (
          <div className="column">
          <div>
            <img
              className="meal-image"
              src={meal.image}
              alt={meal.title}
            />
            <h2
              className="meal-title"
              onClick={() => onMealClick(meal.id)}
            >
              {meal.title}
            </h2>
            <p className="meal-used-ingredients">
              <strong>Used Ingredients:</strong>
            </p>
            <p>
              {meal.usedIngredients.map((ingredient) => (
                <div key={ingredient.id}>
                  <p className="ingredient">{ingredient.original}</p>
                </div>
              ))}
            </p>
            <br />
            <p className="meal-missed-ingredients">
              <strong>Missed Ingredients:</strong>
            </p>
            <p>
              {meal.missedIngredients.map((ingredient) => (
                <div key={ingredient.id}>
                  <p className="ingredient">{ingredient.original}</p>
                </div>
              ))}
            </p>
          </div>
        </div>
        ))}
      </form>


    </div>



  );
}
export default Search;
