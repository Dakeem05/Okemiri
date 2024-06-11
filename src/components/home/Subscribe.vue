<script setup>
    const subscribeHandler = (e) => {
        e.preventDefault();
    }
</script>

<template>
  <main class="py-[5rem] max-w-7xl mx-auto relative">
    <article class="text-center">
        <h1 class="font-plus-jakarta-sans font-[700] text-[3.5rem] w-[70%] mx-auto text-[#141F39]">Subscribe to Notifications from Us on our Latest products</h1>
        <p class="font-[400] text-3xl w-[55%] mx-auto leading-relaxed text-[#141F39]">Stay updated with our latest product releases. Get instant alerts on new arrivals and promotions</p>
    </article>
    <form action="" @submit="subscribeHandler" class="w-[80%] mx-auto [box-shadow:0px_6.49px_97.31px_0px_#00000014] mt-[3rem]  flex">
        <input type="text" placeholder="Enter your email address" class="h-[6rem] w-[80%] pl-[2rem] pr-[1rem] bg-transparent text-3xl focus:outline-none focus:border focus:border-[#00ccff] rounded-[22.5px]">
        <button type="submit" class="bg-[#00ccff] w-[20%] text-white rounded-[15px] px-[2.5rem] text-2xl">Subscribe</button>
    </form>
  </main>
</template>    

<style>

</style>