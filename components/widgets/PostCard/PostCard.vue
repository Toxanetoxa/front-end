<template>
  <div class="card w-full relative">
    <h5 class="uppercase font-bold">{{ post.title }}</h5>
    <div>
      {{ post.body }}
    </div>
    <span
      v-if="isViewed"
      class="uppercase font-bold text-amber-300 border-amber-300 border-2 w-fit p-2 absolute top-1 right-1 z-10"
      >viewed</span
    >
  </div>
</template>

<script setup lang="ts">
import type { Post } from "~/types/post";
const props = defineProps<{
  post: Post;
  isViewed: boolean;
}>();
</script>
