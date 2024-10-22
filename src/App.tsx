import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);
	const handlePrecedentClick = () => {
		setPokemonIndex(pokemonIndex - 1);
	};
	const handleSuivantClick = () => {
		setPokemonIndex(pokemonIndex + 1);
	};
	const pokemonList = [
		{
			name: "bulbasaur",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
		},
		{
			name: "charmander",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
		},
		{
			name: "squirtle",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
		},
		{
			name: "pikachu",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
		},
		{
			name: "mew",
		},
	];

	return (
		<section>
			<div>
				<PokemonCard pokemon={pokemonList[pokemonIndex]} />
				{pokemonIndex > 0 && (
					<button type="button" onClick={handlePrecedentClick}>
						Precedant
					</button>
				)}
				{pokemonIndex < pokemonList.length - 1 && (
					<button type="button" onClick={handleSuivantClick}>
						Suivant
					</button>
				)}
			</div>
		</section>
	);
}

export default App;
