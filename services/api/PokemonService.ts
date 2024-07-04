import PokemonRepository from '~/repositories/PokemonRepository';
import Pokemon from '~/dto/models/Pokemon';

export const PokemonService = {
  async getPokemonList(): Promise<Pokemon[]> {
    return await PokemonRepository.fetchPokemonList();
  },

  async getPokemonById(id: number): Promise<Pokemon> {
    return await PokemonRepository.fetchPokemonById(id);
  }
}
