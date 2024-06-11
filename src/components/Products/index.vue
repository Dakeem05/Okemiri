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
      <div>
        <form @submit.prevent="handleSearch" class="flex items-center rounded-full">
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Look for products..."
            class="w-[80%] px-4 py-4 text-sm border border-[#1D1E1C80] rounded-full focus:outline-none"
          />
        </form>
        <div class="pt-10">
          <img src="../../assets/images/product1.png" alt="" class="w-full" />
        </div>
      </div>
    </div>
    <div class="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductCard
        v-for="product in searchResults"
        :key="product.id"
        :title="product.name"
        :description="product.description"
        :image="product.image"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductCard from './components/ProductCard.vue';

const searchTerm = ref("");
const products = ref([
  { id: 1, name: "Pump Casing", description: "Encloses pump components, directs fluid flow efficiently", image: 'path/to/pump-casing.jpg' },
  { id: 2, name: "Pulley", description: "Simple machine for lifting with mechanical advantage", image: 'path/to/pulley.jpg' },
  { id: 3, name: "Dredging Suction Hose", description: "Flexible, durable hose for efficient underwater sediment removal", image: 'path/to/dredging-suction-hose.jpg' },
  { id: 4, name: "Camlock coupling", description: "Quick, secure, leak-proof", image: 'path/to/camlock-coupling.jpg' },
  { id: 5, name: "Flanges", description: "Connection pipes securely with various flange types", image: 'path/to/flanges.jpg' },
  { id: 6, name: "Lay flat Hose", description: "Flexible, durable hose for low-pressure applications", image: 'path/to/lay-flat-hose.jpg' },
]);

const searchResults = ref([...products.value]);

const handleSearch = () => {
  searchResults.value = products.value.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
};
</script>

<style scoped>
.box {
  box-shadow: 0px 1.98px 3.96px 0px #0000001a;
}
</style>
