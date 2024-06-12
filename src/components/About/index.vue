<template>
  <div class="">
    <main class="mx-auto max-w-7xl relative">
    <div class="w-full lg:h-[500px] h-full bg-black">
      <div class="text-center">
        <h2 class="text-[#00CCFF] text-[36px]">About</h2>
        <h1 class="text-white lg:text-[64px] text-[32px] font-poppins font-bold">
          The Dynamics of Our <br />Operations at
          <span class="text-[#FFD233]">OKEMIRI</span>
        </h1>
      </div>
      <div class="flex flex-col lg:flex-row items-center px-10 lg:px-20 gap-5 py-20 lg:h-[600px]">
        <div class="flex flex-col space-y-4">
          <img src="../../assets/svg/image1.svg" alt="Image 1" />
          <img src="../../assets/svg/image2.svg" alt="Image 2" />
        </div>
        <div class="flex justify-center">
          <img src="../../assets/svg/image3.svg" alt="Image 3" />
        </div>
        <div class="flex flex-col space-y-4">
          <img src="../../assets/svg/image4.svg" alt="Image 4" />
          <img src="../../assets/svg/image5.svg" alt="Image 5" />
        </div>
      </div>
    </div>
   

    <div class=" mt-20 lg:mt-[350px] mb-10">
      <Aboutstory></Aboutstory>
    </div>
    <Aboutvalues></Aboutvalues>
     </main>
    <div class="py-10">
      <homeBenefits></homeBenefits>
    </div>
    <homeSubscribe class="bg-[#FCE5892B]"></homeSubscribe>
  </div>
</template>
<script setup>
import homeBenefits from "../../components/home/Benefits.vue";
import homeSubscribe from "../../components/home/Subscribe.vue";
import Aboutstory from "../../components/About/story.vue";
import Aboutvalues from "../../components/About/values.vue";
</script>
