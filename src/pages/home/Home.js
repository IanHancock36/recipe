import React from "react";
import RecipeList from "../../components/RecipeList";
import { useFetch } from "../../hooks/useFetch";
import "./Home.css";
import "./components/RecipeList"
function Home() {
  const { data, isPending, error } = useFetch("http://localhost:8000/recipes");
  return (
    <div className="home">
      {error && <p>{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
{data && RecipeList/>}
    </div>
  );
}

export default Home;
