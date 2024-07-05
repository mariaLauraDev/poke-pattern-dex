<template>
  <div>
    <VBtn
    color="primary"
    height="40px"
    rounded="lg"
    variant="flat"
    prepend-icon="mdi-plus"
  >
    Adicionar
  </VBtn>
    <v-btn>Click Me</v-btn>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
  classType: string;
  onClick: () => void;
}>();

props.classType = props.classType || 'bg-blue-500 text-white';
props.onClick = props.onClick || (() => {});
</script>
