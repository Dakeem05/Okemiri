<template>
  <div class="py-[50px]">
    <div class="flex flex-col lg:flex-row gap-10 relative">
      <div class="w-full lg:w-[40%] px-10">
        <h1 class="font-extrabold font-plus-jakarta-sans text-[96px] leading-[115.2px]">
          Our Product Catalog
        </h1>
        <p class="text-[28px] font-poppins pt-5">
          Discover our extensive range of durable hoses at Okemiri Hose, where quality is always guaranteed.
        </p>
      </div>
      <div class="relative w-full lg:w-[60%]">
        <div class="absolute top-5 left-1/2 transform -translate-x-1/2 w-[80%]">
          <form @submit.prevent="handleSearch" class="flex items-center bg-white rounded-full shadow-lg p-2">
            <input
              v-model="searchTerm"
              type="text"
              placeholder="Look for Products"
              class="w-full px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none"
            />
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-full ml-2">
              Search
            </button>
          </form>
        </div>
        <img src="../../assets/images/product1.png" alt="Product Image" class="w-full">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const searchTerm = ref('');
const products = ref([
  // Example products structure
  { name: 'Product 1', description: 'Description of Product 1' },
  { name: 'Product 2', description: 'Description of Product 2' },
  // Add more products here
]);
const searchResults = ref([]);

const handleSearch = () => {
  console.log('Searching for:', searchTerm.value);

  // Example: Filter products based on searchTerm
  searchResults.value = products.value.filter(product =>
    product.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  );

  // You can display searchResults in your template as needed
};
</script>

<style scoped>
.box {
  box-shadow: 0px 1.98px 3.96px 0px #0000001A;
}
</style>
