<template>
  <header
    class="header w-full p-5 shadow-sm bg-slate-900 border-violet-800 border-2 sticky top-0 left-0 z-10"
  >
    <nav class="header__nav">
      <ul class="header__list flex gap-5 justify-start">
        <li class="header__item">
          <NuxtLink
            class="cursor-pointerCustom"
            active-class="text-amber-300 neon-text"
            exact-active-class="text-amber-300 neon-text"
            to="/"
            >Home</NuxtLink
          >
        </li>
        <li class="header__item">
          <NuxtLink
            class="cursor-pointerCustom"
            active-class="text-amber-300"
            exact-active-class="text-amber-300"
            to="/recent"
            >Recent</NuxtLink
          >
        </li>
        <li class="header__item">
          <NuxtLink
            class="cursor-pointerCustom"
            active-class="text-amber-300"
            exact-active-class="text-amber-300"
            to="/authors"
            >Authors</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
