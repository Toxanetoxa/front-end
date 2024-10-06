<template>
  <PreLoader v-if="status === 'pending'" />
  <div v-else class="flex flex-col gap-5">
    <h1 class="page-title">Recent</h1>
    <div class="flex flex-col gap-5">
      <template v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/post/${post.id}`" class="cursor-pointerCustom">
          <PostCard :post="post" :is-viewed="true" />
        </NuxtLink>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from "~/types/post";
import PostCard from "~/components/widgets/PostCard/PostCard.vue";
import PreLoader from "~/components/widgets/PreLoader/PreLoader.vue";

definePageMeta({
  layout: "default",
});

const viewedPostsCookie = useCookie("viewedPosts");
const viewedPostsIds: number[] = viewedPostsCookie.value
  ? viewedPostsCookie.value.map((id: string) => Number(id))
  : [];

console.log(viewedPostsCookie.value);

const { status, data: posts } = await useAsyncData("posts", () =>
  $fetch<Post[]>("http://backend.app.loc/recentPosts", {
    method: "POST",
    body: {
      ids: viewedPostsIds,
    },
  })
);
</script>

<style lang="scss" scoped></style>
