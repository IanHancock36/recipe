import React, { useState } from "react";
import "./Create.css";

function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");

  const handleSubmit = (e)=> {
e.preventDefault()
console.log(title,method,cookingTime)
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
