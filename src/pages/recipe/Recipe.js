import React from "react";
// import "Recipe.css";

import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

function Recipe() {
  const { id } = useParams();
  const url = "http://localhost:3001/recipes/" + id;
  const { error, isPending, data: recipe } = useFetch(url);
  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
      <>
      <h2 className="page-title">{recipe.title}</h2>
      <p>Takes {recipe.cookingTime}</p>
      {/* cycling through array of strings with map when one layer has already been drilled down with a map map on a map */}
      <ul>
        {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
      </ul>
      <p className="method">{recipe.method}</p>
      </>
      
      )}
    </div>
  );
}

export default Recipe;
