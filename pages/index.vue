<template>
  <div v-if="status === 'pending'">
    <PreLoader />
  </div>
  <section
    v-if="status === 'success' && posts?.length"
    class="flex flex-col gap-5"
  >
    <h1 class="page-title">Posts</h1>
    <div v-for="post in posts" :key="post.id">
      <NuxtLink :to="`/post/${post.id}`" class="cursor-pointerCustom">
        <PostCard
          :post="post"
          :class="'card-hover'"
          :is-viewed="viewedPostsCookie?.includes(post.id.toString()) ?? false"
        />
      </NuxtLink>
    </div>
  </section>
  <PreLoader v-else />
</template>

<script setup lang="ts">
import PostCard from "~/components/widgets/PostCard/PostCard.vue";
import PreLoader from "~/components/widgets/PreLoader/PreLoader.vue";
import type { Post } from "~/types/post";

definePageMeta({
  layout: "default",
});

const { status, data: posts } = await useAsyncData("posts", () =>
  $fetch<Post[]>("http://backend.app.loc/posts")
);

const viewedPostsCookie = useCookie("viewedPosts");
</script>
