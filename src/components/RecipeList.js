
import React from 'react'
import {Link} from "react-router-dom"
export default function RecipeList ({ recipes }) {
   console.log(recipes)
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`${recipe.id}` }>Cook This</Link>
        </div>
      ))}
    </div>
  );
}
