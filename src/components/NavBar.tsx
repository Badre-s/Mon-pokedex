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
	const handlePokemonSelect = (index: number) => {
		setPokemonIndex(index);
		if (pokemonList[index].name === "pikachu") {
			alert("pika pikachu !!!");
		}
	};

	return (
		<section>
			<div>
				<PokemonCard pokemon={pokemonList[pokemonIndex]} />
				{pokemonList.map((pokemon, index) => (
					<span key={pokemon.name}>
						<button type="button" onClick={() => handlePokemonSelect(index)}>
							{pokemon.name}
						</button>
					</span>
				))}
			</div>
		</section>
	);
};

export default NavBar;

//       ⢀⡞⠳⣄⣀⣀⣀⣠⠞⢷⡀
//      ⣸⠟⠋⠁      ⠈⠙⠻⣇    ⣀
//     ⡾⠁⢰⣿⡆  ⣀  ⢰⣽⡆⠈⢧⢰⠛⡇
//    ⣸⢷⠶⠒⠉  ⠒⠭⠒  ⠉⠒⢶⠾⣏⡼⠃
//    ⣿⠶⣤⣀⣀        ⣀⣀⣤⠶⡟⠁
//    ⢸    ⠈⠉⠙⠛⠛⠉⠉⠁    ⣏⣉⡙⣆
//    ⠘⡆                 ⢸⠃  ⢹⢸
//     ⣇                 ⢸⢀⡴⢣⠇
//     ⢸                 ⣸⠭⠔⠁
//     ⠸⣆⣀            ⣀⣰⠇
//         ⠉⠙⠓⠒⠒⠒⠚⠋⠉
