<template>
  <button :class="['px-4 py-2 rounded', classType]" @click="onClick">
    <slot></slot>
  </button>
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
