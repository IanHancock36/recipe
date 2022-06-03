import React from "react";
import RecipeList from '../../components/RecipeList'
import { useFetch } from "../../hooks/useFetch";
import "./Home.css";


function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3001/recipes");
  return (
    <div className="home">
      {error && <p>{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
{data && <RecipeList recipes={data}/>}
    </div>
  );
}

export default Home;

