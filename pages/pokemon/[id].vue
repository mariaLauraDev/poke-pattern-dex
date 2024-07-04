<template>
  <div class="p-4">
    <h2 class="text-2xl mb-4">{{ pokemon?.name }}</h2>
    <div v-if="pokemon">
      <p><strong>ID:</strong> {{ pokemon.id }}</p>
      <p><strong>Height:</strong> {{ pokemon.height }}</p>
      <p><strong>Weight:</strong> {{ pokemon.weight }}</p>
      <p><strong>Types:</strong> {{ pokemon.types.map(type => type.type.name).join(', ') }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePokemon } from '~/composables/usePokemon';

const route = useRoute();
let { pokemon, fetchPokemonById } = usePokemon();

onMounted(async () => {
  console.log('$route.params.id', route.params.id)
  await fetchPokemonById(Number(route.params.id));
});
</script>
