import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { RecipeCreate } from "./RecipeCreate";
import { RecipeEdit } from "./RecipeEdit";
import { RecipeSingle } from "./RecipeSingle";
import { RecipeList } from "./RecipeList";
import { Home } from "./Home";

function App() {
  return (
    <Router>
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-primary mb-3">
        <div className="" id="navbarNav">
          <ul className="navbar-nav lead font-weight-bold">
            <li className="nav-item">
              <NavLink to={`/`}>
                <span className="nav-link">
                  <img width="60px" src={`https://recept-app.fly.dev/static/assets/logo.png`} alt="logo" />
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/`}>
                <span className="nav-link fw-bold pt-4">Receptek</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/uj-recept`}>
                <span className="nav-link fw-bold pt-4">Új recept</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" exact element={<RecipeList/>} />
        <Route path="/uj-recept" exact element={<RecipeCreate/>} />
        <Route path="/recept-szerkesztes/:recipeSlug" exact element={<RecipeEdit/>} />
        <Route path="/recept/:recipeSlug" exact element={<RecipeSingle/>} />
        <Route path="*" exact element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
