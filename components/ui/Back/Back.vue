<template>
  <button
    @click="goBack"
    class="fixed top-10 right-10 z-20 cursor-pointerCustom uppercase text-amber-300 font-bold text-xl w-fit border-amber-300 border-2 flex flex-row items-center gap-2 p-2 hover:bg-violet-900 transition ease-in-out delay-150 duration-300"
  >
    <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 0L0 6l7 6V9h5V3H7V0z" fill="#fcd34d" />
    </svg>
    Back
  </button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = (): void => {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    navigateHome();
  }
};

const navigateHome = (): void => {
  router.push("/");
};
</script>
