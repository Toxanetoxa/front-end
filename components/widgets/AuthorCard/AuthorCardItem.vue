<template>
  <div class="flex flex-row items-center gap-2">
    <i :class="`${icon}-icon`" class="t-icon"></i>
    <span class="uppercase text-amber-300 font-bold"> {{ title }}: </span>
    <span>{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  text: string | number;
  icon: string;
}

const props = defineProps<Props>();
</script>
