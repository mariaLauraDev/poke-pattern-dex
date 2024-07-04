<template>
  <div class="flex justify-between items-center p-4 bg-white shadow mb-2">
    <span>{{ pokemon.name }}</span>
    <nuxt-link :to="`/pokemon/${pokemon.id}`" class="text-blue-500 underline">Details</nuxt-link>
  </div>
</template>

<script lang="ts" setup>
import Pokemon from '~/dto/models/Pokemon';

const props = defineProps<{ pokemon: Pokemon }>();
</script>
