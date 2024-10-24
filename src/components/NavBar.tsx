import PokemonCard from "./PokemonCard";

type Pokemon = {
	name: string;
	imgSrc?: string;
};

type NavBarProps = {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
};

const NavBar = ({
	pokemonIndex,
	setPokemonIndex,
	pokemonList,
}: NavBarProps) => {
	const handlePrecedentClick = () => {
		setPokemonIndex(pokemonIndex - 1);
	};
	const handleSuivantClick = () => {
		setPokemonIndex(pokemonIndex + 1);
	};

	return (
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
	);
};
export default NavBar;

// ༼ つ ◕_◕ ༽つ // ༼ つ ◕_◕ ༽つ // ༼ つ ◕_◕ ༽つ // ༼ つ ◕_◕ ༽つ // ༼ つ ◕_◕ ༽つ // ༼ つ ◕_◕ ༽つ
