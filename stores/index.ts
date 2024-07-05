import { defineStore } from 'pinia';
import { PokemonService } from '~/services/api/PokemonService';
import Pokemon from '~/dto/models/Pokemon';

export const usePokemonStore = defineStore('pokemonStore', {
  state: () => ({
    pokemonList: [] as Pokemon[],
    pokemon: null as Pokemon | null
  }),
  getters: {},
  actions: {
    async fetchPokemonList() {
      this.pokemonList = await PokemonService.getPokemonList();
    },
    async fetchPokemonById(id: number) {
      this.pokemon = await PokemonService.getPokemonById(id);
    }
  }
});
