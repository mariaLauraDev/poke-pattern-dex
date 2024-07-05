<template>
  <div
    class="flex justify-center items-center p-4 shadow mb-2 rounded-md"
    @click.prevent="goToPokemonDetails(pokemon.id)"
  >
    <!-- <span>{{ pokemon.name }}</span> -->
    <!-- <img :src="pokemon.image" alt="" class="mx-auto"> -->

    <p class="text-center mt-2">{{ pokemon.name }}</p>

    <!-- <nuxt-link :to="`/pokemon/${pokemon.id}`" class="text-blue-500 underline">Details</nuxt-link> -->
  </div>
</template>

<script lang="ts" setup>
import Pokemon from '~/dto/models/Pokemon';

const props = defineProps<{ pokemon: Pokemon }>();
const router = useRouter();

const goToPokemonDetails = (id: number) => {
  router.push(`/pokemon/${id}`);
};
</script>
