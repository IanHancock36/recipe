import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Weird Recipes</h1>
        </Link>
        <Link className="create" to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}

export default Navbar;
