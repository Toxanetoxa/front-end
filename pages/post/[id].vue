<template>
  <Back />
  <div v-if="status === 'pending'">
    <PreLoader />
  </div>
  <div v-else-if="status === 'error'">Error loading users</div>
  <section v-else class="flex flex-col">
    <h1 class="uppercase font-bold text-amber-300 text-4xl">
      {{ post.title }}
    </h1>
    <div class="flex mt-10 p-10 border-2 border-violet-800">
      {{ post.body }}
    </div>
  </section>
</template>

<script setup>
import Back from "~/components/ui/Back/Back.vue";
import PreLoader from "~/components/widgets/PreLoader/PreLoader.vue";

definePageMeta({
  layout: "default",
});

const { id } = useRoute().params;

const { status, data: post } = await useAsyncData("posts", () =>
  $fetch(`http://backend.app.loc/posts/${id}`)
);

const viewedPostsCookie = useCookie("viewedPosts", {
  default: () => [],
});

const viewedPosts = computed(() => {
  return Array.isArray(viewedPostsCookie?.value) ? viewedPostsCookie.value : [];
});

const isViewed = computed(() => {
  return viewedPosts.value.includes(id);
});

const markAsViewed = () => {
  if (!isViewed.value) {
    const updatedViewedPosts = [...viewedPosts.value, id];
    viewedPostsCookie.value = JSON.stringify(updatedViewedPosts);
  }
};

onMounted(() => {
  markAsViewed();
});
</script>

<style lang="scss" scoped></style>
