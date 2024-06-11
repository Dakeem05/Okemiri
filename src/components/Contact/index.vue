<template>
  <div class="">
    <div class="w-full lg:h-[500px] h-full flex flex-col lg:flex-row bg-black gap-10 text-white px-5 lg:px-20 pt-[50px]">
      <div class="w-full lg:w-[50%]">
       <div class="text-center lg:text-start">
         <h2 class="text-[#00CCFF] text-[36px]">Contact</h2>
        <h1
          class="text-white font-plus-jakarta-sans lg:text-[80px] text-[40px] font-bold leading-normal py-3 lg:py-0"
        >
          Get in <br>TOUCH
        </h1>
       </div>
        <p class="font-poppins text-[26px]">
          We supply the best and highest quality rubber hose, suction hose, lay
          flat hose, plastic rubber hose, and
        </p>
         <div class="text-white w-full lg:text-black ">
            <h5 class="font-[700] font-manjari text-2xl">Contact us</h5>
            <ul class="flex flex-col gap-[1rem] mt-[2rem] font-lexend font-light">
                <li><div class="text-lg "><a id="Email" class="flex gap-[1rem]" href="mailto:emmanuelchuo8@gmail@gmail.com"><i class="fa-solid fa-envelope text-[1.5rem]"></i>emmanuelchuo8@gmail.com</a></div></li>
                <li><div class="text-lg flex gap-[1rem]"><i class="fa-solid fa-phone text-[1.5rem]"></i>+2348130145486, +2348035498466</div></li>
                <li><div class="text-lg flex gap-[1rem]"><i class="fa-solid fa-location-dot text-[1.5rem]"></i>Abia State, Nigeria</div></li>
            </ul>
        </div>
      </div>
      <Contactform></Contactform>
      
     
    </div>
    <div class="pt-[20px] lg:pt-[300px]">
        <Contactwarehouse></Contactwarehouse>
     <Contactfaqs></Contactfaqs>
     </div>
  </div>
</template>

<script setup>
import Contactform from "../../components/Contact/form.vue";
import Contactfaqs from "../../components/Contact/faqs.vue";
import Contactwarehouse from "../../components/Contact/warehouse.vue";
import Aboutvalues from "../../components/About/values.vue";
</script>
