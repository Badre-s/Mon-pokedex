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
	return (
		<section>
			<div>
				<PokemonCard pokemon={pokemonList[pokemonIndex]} />
				{pokemonList.map((pokemon, index) => (
					<span key={pokemon.name}>
						<button type="button" onClick={() => setPokemonIndex(index)}>
							{" "}
							{pokemon.name}{" "}
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
