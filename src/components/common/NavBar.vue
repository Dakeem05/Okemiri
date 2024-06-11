<script setup>
</script>

<template>
  <main class="max-w-7xl mx-auto relative">
    <nav class="py-[1.5rem] flex justify-between">
        <router-link to="/">
            <img src="../../assets/images/transparent 1.png" alt="Okemiri logo">
        </router-link>
        <ul class="flex gap-[2rem] font-medium text-lg pt-[1rem]">
            <li><router-link active-class="underline decoration-black" to="/" class="hover:underline decoration-[1.5px] hover:decoration-gray-400 underline-offset-4">Home</router-link></li>
            <li><router-link active-class="underline decoration-black" to="/products" class="hover:underline decoration-[1.5px] hover:decoration-gray-400 underline-offset-4">Products</router-link></li>
            <li><router-link active-class="underline decoration-black" to="/about-us" class="hover:underline decoration-[1.5px] hover:decoration-gray-400 underline-offset-4">About Us</router-link></li>
            <li><router-link active-class="underline decoration-black" to="/contact-us" class="hover:underline decoration-[1.5px] hover:decoration-gray-400 underline-offset-4">Contact Us</router-link></li>       
        </ul>

        <div>
            <button class="bg-black text-white px-8 py-4 rounded-full">Get a Quota</button>
        </div>
    </nav>
  </main>
</template>    

<style>

</style>