import React from "react";
import Pokedex from "./assets/pokedex.png";

import "./App.css";

function App() {
  return (
    <main>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif"
        alt="pokemon"
        className="pokemon__image"
      />

      <h1 className="pokemon__data">
        <span className="pokemon__number">6</span>-
        <span className="pokemon__name">charizard</span>
      </h1>

      <form className="form">
        <input
          type="search"
          className="input__search"
          placeholder="Name or Number"
          required
        />
      </form>

      <div className="buttons">
        <button className="button btn-prev">&lt; Prev</button>
        <button className="button btn-next">Next &gt;</button>
      </div>

      <img src={Pokedex} alt="pokedex" className="pokedex" />
    </main>
  );
}

export default App;
