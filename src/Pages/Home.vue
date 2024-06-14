<script setup>

  import Hero from '../components/home/Hero.vue';
    import NavBar from '../components/common/NavBar.vue';
    import About from '../components/home/About.vue';
    import Products from '../components/home/Products.vue';
    import Benefits from '../components/home/Benefits.vue';
import Reviews from '../components/home/Reviews.vue';
import Subscribe from '../components/home/Subscribe.vue';
import Footer from '../components/common/Footer.vue';
</script>

<template>
  <main class="z-30 ">
    <section>
        <nav-bar></nav-bar>
        <div class="mt-[2rem] pt-[4rem]">
            <Hero></Hero>
        </div>
        <div class="mt-[4rem]">
            <about></about>
        </div>
        <div class="mt-[4rem]">
            <products></products>
        </div>
        <div class="mt-[4rem]">
            <benefits></benefits>
        </div>
        <div class="mt-[4rem]">
            <reviews></reviews>
        </div>
        <div class="mt-[4rem]">
            <Subscribe></Subscribe>
        </div>
        <footer class="mt-[4rem]">
            <Footer></Footer>
        </footer>
    </section>
  </main>
</template>    

<style>

</style>