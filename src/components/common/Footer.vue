<script setup>
</script>

<template>
  <footer class="bg-[#2A2D3E] text-white py-[4rem]">
    <section class="max-w-7xl mx-auto relative flex gap-[4rem] justify-between">
        <div class="w-[40%]">
            <img src="../../assets/images/transparent 1 (1).png" alt="">
            <p class="mt-[2rem] font-[300] text-2xl leading-relaxed">We supply the best and highest quality rubber hose, suction hose, lay flat hose, plastic rubber hose, and so on, all oil based on the demand.</p>
        </div>

        <div class="w-[30%]">
            <h5 class="font-[700] font-manjari text-2xl">Contact us</h5>
            <ul class="flex flex-col gap-[1rem] mt-[2rem] font-lexend font-light">
                <li><div class="text-lg "><a id="Email" class="flex gap-[1rem]" href="mailto:emmanuelchuo8@gmail@gmail.com"><i class="fa-solid fa-envelope text-[1.5rem]"></i>emmanuelchuo8@gmail.com</a></div></li>
                <li><div class="text-lg flex gap-[1rem]"><i class="fa-solid fa-phone text-[1.5rem]"></i>+2348130145486, +2348035498466</div></li>
                <li><div class="text-lg flex gap-[1rem]"><i class="fa-solid fa-location-dot text-[1.5rem]"></i>Abia State, Nigeria</div></li>
            </ul>
        </div>

        <div class="w-[30%]">
            <h5 class="font-[700] font-manjari text-2xl">Company</h5>
            <ul class="flex flex-col gap-[1rem] mt-[2rem] font-lexend font-light">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/products">Products</router-link></li>
                <li><router-link to="/about-us">About Us</router-link></li>
                <li><router-link to="/contact-us">Contact Us</router-link></li>
            </ul>
        </div>
    </section>
  </footer>
</template>    

<style>

</style>