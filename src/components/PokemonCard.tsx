type pokemonProps = {
	name: string;
	imgSrc?: string;
};
function PokemonCard({ name, imgSrc }: pokemonProps) {
	return (
		<figure>
			<img src={imgSrc} alt={name} />) : (<p>???</p>
			<figcaption>{name}</figcaption>
		</figure>
	);
}

export default PokemonCard;
