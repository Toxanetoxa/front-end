<template>
  <div class="flex flex-col card cursor-pointerCustom">
    <template v-for="item in cardData" :key="item.key">
      <AuthorCardItem
        :icon="item.icon"
        :text="item.text.toString()"
        :title="item.title"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { Author, Address, Company } from "~/types/author";
import AuthorCardItem from "./AuthorCardItem.vue";

const props = defineProps<{
  author: Author;
}>();

const cardFields = ref([
  { key: "name", label: "Name" },
  { key: "username", label: "Username" },
  { key: "email", label: "Email" },
  { key: "address", label: "Address", subkey: "city" },
  { key: "company", label: "Company", subkey: "name" },
  { key: "specialization", label: "Specialization", subkey: "bs" },
]);

const cardData = computed(() => {
  return cardFields.value.map((field) => {
    let value;

    if (field.key === "address") {
      value = address.value;
    } else if (field.key === "company") {
      value = companyName.value;
    } else if (field.key === "specialization") {
      value = specialization.value;
    } else {
      value = props.author[field.key as keyof Author];
    }

    return {
      title: field.label,
      text: value,
      icon: field.key,
    };
  });
});

const companyName = computed(() => {
  return props.author.company.name;
});

const address = computed(() => {
  return `${props.author.address.city} / ${props.author.address.street} / ${props.author.address.suite}`;
});

const specialization = computed(() => {
  return `${props.author.company.bs}`;
});
</script>

<style></style>
