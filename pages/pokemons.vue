<template>
  <div class="p-4">
    <h2 class="text-xl mb-4">Pokémon List</h2>
    <div v-for="pokemon in pokemonList" :key="pokemon.id">
      <SpecificPokemonItem :pokemon="pokemon" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePokemon } from '~/composables/usePokemon';

const { pokemonList, fetchPokemonList } = usePokemon();

onMounted(async () => {
  await fetchPokemonList();
});

// OBS: usar store ao inves do composable quando aprender
</script>
