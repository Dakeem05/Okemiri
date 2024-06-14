<template>
  <main>
    <div class="bg-black">

      <commonNavBar class=""> </commonNavBar>
    </div>
    <About ></About>

    <commonFooter></commonFooter>
  </main>
</template>

<script setup>
import commonNavBar from "../../components/common/NavBar2.vue";
import About from "../../components/About/index.vue";

import commonFooter from "../../components/common/Footer.vue";
</script>
