<template>
  <Back />
  <div v-if="status === 'pending'">
    <PreLoader />
  </div>
  <div v-else-if="status === 'error'">Error loading users</div>
  <section class="flex flex-col gap-5" v-else>
    <h1 class="page-title">Authors</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="author in authors" :key="author.id">
        <NuxtLink :to="`/authors/${author.id}`" class="cursor-pointerCustom">
          <AuthorCard :author="author" :class="'card-hover'" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AuthorCard from "~/components/widgets/AuthorCard/AuthorCard.vue";
import Back from "~/components/ui/Back/Back.vue";
import PreLoader from "~/components/widgets/PreLoader/PreLoader.vue";

import type { Author } from "~/types/author";

definePageMeta({
  layout: "default",
});

const { status, data: authors } = await useAsyncData("authors", () =>
  $fetch<Author[]>("http://backend.app.loc/authors")
);
</script>

<style lang="scss" scoped></style>
