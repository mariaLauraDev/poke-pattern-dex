import { ref } from 'vue';
import Pokemon from '~/dto/models/Pokemon';
import { PokemonService } from '~/services/api/PokemonService';

export function usePokemon() {
  const pokemonList = ref<Pokemon[]>([]);
  const pokemon = ref<Pokemon | null>(null);

  const fetchPokemonList = async () => {
    pokemonList.value = await PokemonService.getPokemonList();
  };

  const fetchPokemonById = async (id: number) => {
    pokemon.value = await PokemonService.getPokemonById(id);
  };

  return {
    pokemonList,
    pokemon,
    fetchPokemonList,
    fetchPokemonById
  };
}
