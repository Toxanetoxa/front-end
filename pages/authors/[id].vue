<template>
  <Back />
  <div v-if="status === 'pending'">
    <PreLoader />
  </div>
  <div v-else-if="status === 'error'">Error loading users</div>
  <section v-if="isLoadingData" class="flex flex-col gap-5">
    <template v-if="author">
      <h1 class="page-title">{{ author.name }}</h1>
      <AuthorCard :author="author" />
    </template>
    <section v-if="posts?.length" class="flex flex-col gap-5">
      <template v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/post/${post.id}`" class="cursor-pointerCustom">
          <PostCard
            :post="post"
            :is-viewed="
              viewedPostsCookie?.includes(post.id.toString()) ?? false
            "
            :class="'card-hover'"
          />
        </NuxtLink>
      </template>
    </section>
  </section>
</template>

<script setup lang="ts">
import PostCard from "~/components/widgets/PostCard/PostCard.vue";
import AuthorCard from "~/components/widgets/AuthorCard/AuthorCard.vue";
import Back from "~/components/ui/Back/Back.vue";
import PreLoader from "~/components/widgets/PreLoader/PreLoader.vue";

import type { Post } from "~/types/post";
import type { Author } from "~/types/author";

definePageMeta({
  layout: "default",
});

const { id } = useRoute().params;

const { status, data: author } = await useAsyncData("author", () =>
  $fetch<Author>(`http://backend.app.loc/authors/${id}`)
);

const { status: postStatus, data: posts } = await useAsyncData("posts", () =>
  $fetch<Post[]>(`http://backend.app.loc/userPosts/${id}`)
);

const isLoadingData = computed(() => {
  return status.value === "success" && postStatus.value === "success";
});

const viewedPostsCookie = useCookie("viewedPosts");
</script>

<style lang="scss" scoped></style>
