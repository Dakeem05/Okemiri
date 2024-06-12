<template>
  <div class="bg-white p-4 rounded-lg shadow-md">
    <img
      :src="image"
      alt="Product Image"
      class="w-full rounded-md"
    />
    <h2 class="text-lg font-semibold mt-2">{{ title }}</h2>
    <p class="text-gray-600">{{ description }}</p>
   <div class="flex justify-end">
     <button class="bg-black text-white px-8 py-4 rounded-full">Buy Now</button>
   </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  image: String,
});
</script>

<style scoped>
/* Add any additional styles if necessary */
</style>
