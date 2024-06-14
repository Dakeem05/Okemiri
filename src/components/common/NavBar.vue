<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <main class="max-w-7xl mx-auto relative">
    <nav class="py-6 px-10 flex justify-between items-center">
      <!-- Logo -->
      <router-link to="/" class="block">
        <img src="../../assets/images/transparent 1.png" alt="Okemiri logo" class="h-10">
      </router-link>
      
      <!-- Hamburger Menu Icon -->
      <div class="lg:hidden">
        <button @click="toggleMenu" aria-label="Toggle Menu">
          <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <!-- Menu Links -->
      <ul :class="{'hidden': !isMenuOpen, 'flex': isMenuOpen}" class="lg:flex flex-col lg:flex-row gap-6 lg:gap-8 font-medium text-lg lg:pt-0 pt-4 absolute lg:static h-100 bg-white lg:bg-transparent w-full lg:w-auto left-0 lg:left-auto top-16 lg:top-auto shadow-lg lg:shadow-none text-center lg:py-0">
        <li><router-link active-class="underline decoration-black" to="/" class="block lg:inline hover:underline decoration-[1.5px] hover:decoration-gray-400 underline-offset-4">Home</router-link></li>
        <li><router-link active-class="underline decoration-black" to="/products" class="block lg:inline hover:underline decoration-[1.5px] hover:decoration-gray-400 underline-offset-4">Products</router-link></li>
        <li><router-link active-class="underline decoration-black" to="/about-us" class="block lg:inline hover:underline decoration-[1.5px] hover:decoration-gray-400 underline-offset-4">About Us</router-link></li>
        <li><router-link active-class="underline decoration-black" to="/contact-us" class="block lg:inline hover:underline decoration-[1.5px] hover:decoration-gray-400 underline-offset-4">Contact Us</router-link></li>
        
        <!-- Mobile Get a Quote Button -->
        <li class="lg:hidden mt-4 text-center">
          <button class="bg-black text-white px-8 py-4 rounded-full">Get a Quota</button>
        </li>
      </ul>

      <!-- Desktop Get a Quote Button -->
      <router-link to="/products" class="hidden lg:block">
        <button class="bg-black text-white px-8 py-4 rounded-full">Get a Quota</button>
      </router-link>
    </nav>
  </main>
</template>

<style scoped>
nav ul {
  transition: all 0.3s ease;
}
</style>
