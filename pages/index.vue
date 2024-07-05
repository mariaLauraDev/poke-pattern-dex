<template>
  <div class="">
    <div class="text-center p-6 mt-10">
      <h1 class="text-3xl font-bold mb-2 text-left">Pokédex</h1>
      <p class="mb-4 text-left"> Search for a Pokémon by name or using its National Pokédex number.</p>
      <div class="flex justify-center mb-4 w-100 border p-2 rounded-md w-full">
        <input type="text" placeholder="Name or number" class="">
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div v-for="pokemon in pokemonList" :key="pokemon.id" >
          <SpecificPokemonItem :pokemon="pokemon" />
          <!-- <img :src="pokemon.image" alt="" class="mx-auto"> -->
          <!-- <p class="text-center mt-2">{{ pokemon.name }}</p> -->
          <!-- <p class="text-center text-sm text-gray-600">{{ pokemon.number }}</p> -->
        </div>
      </div>
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
