// Question: Render a List of Items from an API using map() in React
// You need to create a React component that fetches data from an API and displays the list of items on the screen using the .map() method.

import React, { useEffect, useState } from "react";
import "../Styles/APIDataFetcher.css";

const APIDataFetcher = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemonData = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      );
      const data = await response.json();
      setPokemonList(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  return (
    <div className="parent-container">
      <h2>Pokemon List</h2>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name} className="pokemon-item">
            <h3>{pokemon.name}</h3>
            <a href={pokemon.url} target="" rel="">
              View Details
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default APIDataFetcher;
