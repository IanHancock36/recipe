import React, { useState } from "react";
import "./Create.css";

function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredients, setNewIngredients] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, method, cookingTime);
  };
  const handleAdd = (e) => {

    e.preventDefault()
    // takes away white space on the input
    const ing = newIngredients.trim()
    // this looks at ingredients array and checks to see if there is the same ingredient there so we do not 
    // so we dont have a duplicate ingredient
  if(ing && !ingredients.includes(ing))

  }

  return (
    <div className="create">
      <h2>Add a new Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title: </span>
          <input
            type="text"
            // onchange event fires when ever input changes
            // e.target gets whatever is inside in the input is the new state
            onChange={(e) => setTitle(e.target.value)}
            // two way binding whatever changes user or not will be reflected here
            value={title}
            required
          />
        </label>
        <label>
          <span>Recipe Ingredients </span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredients(e.target.value)}
              value={newIngredients}
            />
            <button onClick={handleAdd} className="btn">
              add
            </button>
          </div>
        </label>
        <label>
          <span>Recipe Method </span>

          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <label>
          <span>Cooking Time: </span>
          <input
            type="number"
            // onchange event fires when ever input changes
            // e.target gets whatever is inside in the input is the new state
            onChange={(e) => setCookingTime(e.target.value)}
            // two way binding whatever changes user or not will be reflected here
            value={cookingTime}
            required
          />
        </label>
        <button className="btn">submit</button>
      </form>
    </div>
  );
}

export default Create;
