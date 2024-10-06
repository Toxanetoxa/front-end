<template>
  <Header />
  <main class="container mx-auto mt-12 p-4">
    <slot />
  </main>
  <Footer />
</template>

<script setup>
import Header from "@ui/Header/Header.vue";
import Footer from "@ui/Footer/Footer.vue";
</script>
