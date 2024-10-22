function PokemonCard({ pokemon }) {
	return (
		<figure>
			<img src={pokemon.imgSrc} alt={pokemon.name} />) : (<p>???</p>
			<figcaption>{pokemon.name}</figcaption>
		</figure>
	);
}

export default PokemonCard;
