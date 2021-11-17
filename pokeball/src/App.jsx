import "./App.css";
import   {useState} from "react";
import axios from "axios";
const App = () => {
const [pokename,setPokeName] = useState("");
const [pokeChosen,setPokeChosen] = useState(false);
const [pokemon,setPokemon] = useState({
  name: "",
  number:"",
  species:"",
  image:"",
  hp:"",
  attck:"",
  defense:"",
  speed:"",
  type:"",
});

const SeachPokemon = ()=>{ axios.get (`https://pokeapi.co/api/v2/pokemon/${pokename}`).then(
(res) => {
  setPokemon({   
    name:pokename,
    number: res.data.id,
    species: res.data.species.name,
    image: res.data.sprites.front_default,
    hp: res.data.stats[0].base_stat,
    attck: res.data.stats[1].base_stat,
    defense: res.data.stats[2].base_stat,
    speed: res.data.stats[5].base_stat,
    type: res.data.types[0].type.name,
  });
  setPokeChosen(true);
}
  );
};

  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Pokeball</h1>
        <input type="text" onChange={(event) =>{setPokeName(event.target.value);
        }}
        value={pokename.toLowerCase()}/> 
        <div>
	{pokename && <button onClick={SeachPokemon}>Search Pokémon</button>}
</div>
      </div>
      <div className="DisplaySection">
        {!pokeChosen?(
          <h1>Please choose a pokemon</h1>
          ):(
            <>
            <div className="pokemon">
          <h1>{pokemon.name}</h1>
          <img src={pokemon.image} alt={pokename}/>
          <h3>number:#{pokemon.number}</h3>
          <h3>species:{pokemon.species}</h3>
          <h3>type:{pokemon.type}</h3>
          <h4>attack:{pokemon.attck}</h4>
          <h4>defense:{pokemon.defense}</h4>
          <h4>speed:{pokemon.speed}</h4>
          </div>
          </>    
        )}
      </div>
    </div>
  );
};

export default App;