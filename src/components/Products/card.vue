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
      <button
        class="bg-black text-white px-8 py-4 rounded-full"
        @click="handleBuyNow"
      >
        Buy Now
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  title: String,
  description: String,
  image: String,
});

const router = useRouter();

const handleBuyNow = () => {
  const message = `I am interested in buying this product: ${props.title}`;
  router.push({ path: '/contact-us', query: { message } });
};
</script>

<style scoped>

</style>
