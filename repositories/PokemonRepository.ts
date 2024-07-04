import axios from 'axios';
import Pokemon from '~/dto/models/Pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export default {
  async fetchPokemonList(): Promise<Pokemon[]> {
    console.log('fetchPokemonList');
    const response = await axios.get(`${BASE_URL}`);
    return response.data.results.map((pokemon: any, index: number) => new Pokemon(index + 1, pokemon.name, 0, 0, []));
  },

  async fetchPokemonById(id: number): Promise<Pokemon> {
    console.log('fetchPokemonById');
    const response = await axios.get(`${BASE_URL}/${id}`);
    const { name, height, weight, types } = response.data;
    return new Pokemon(id, name, height, weight, types);
  }
}



// import axios from 'axios';
// import Pokemon from '~/dto/models/Pokemon';

// const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

// export default {
//   async fetchPokemonList(): Promise<Pokemon[]> {
//     const response = await axios.get(`${BASE_URL}?limit=151`);
//     return response.data.results.map((pokemon: any, index: number) => new Pokemon(index + 1, pokemon.name, 0, 0, []));
//   },

//   async fetchPokemonById(id: number): Promise<Pokemon> {
//     const response = await axios.get(`${BASE_URL}/${id}`);
//     const { name, height, weight, types } = response.data;
//     return new Pokemon(id, name, height, weight, types);
//   }
// }
