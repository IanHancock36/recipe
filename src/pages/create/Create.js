import React, { useState, useRef } from "react";
import { useFetch } from "../../hooks/useFetch";
import "./Create.css";

function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredients, setNewIngredients] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null)
  const {postData, data, error} = useFetch("http://localhost:3000/recipes", "POST")

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({title, ingredients,method, cookingTime: cookingTime + " minuets"})
  };
  const handleAdd = (e) => {

    e.preventDefault()
    // takes away white space on the input
    const ing = newIngredients.trim()
    // this looks at ingredients array and checks to see if there is the same ingredient there so we do not 
    // so we dont have a duplicate ingredient if it is already there it wont get added again
  if(ing && !ingredients.includes(ing)){
  // taking previous state then adding the new ingredient to the end of the array using spread operator.
  setIngredients(prevIngredients => [...prevIngredients, ing])
  }
  // after the "if check and the new ingredient is added we need to reset our state"
  setNewIngredients("")
  // this will return our input back to empty
  ingredientInput.current.focus()

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
            ref = {ingredientInput}

    
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
        {/* <em></em> is emphisise tag */}
        <p>Current Ingredients: {ingredients.map(i => <em key={ingredients}>{i} , </em>)}</p>
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
