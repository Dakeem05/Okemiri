
<template>
     <main class="bg-[#00ccff] py-[3rem]">
    <div class="mx-auto max-w-7xl relative px-10">
      <article class="text-center">
        <h1 class="font-[300] text-[2rem]">Reviews</h1>
        <h2 class="font-manjari font-[700] text-white text-[2.5rem] mt-[1rem]">HEAR FROM OUR CUSTOMERS</h2>
      </article>
  <div v-if="width > 1024">
    <swiper
    :slides-per-view="3"
    :space-between="50"
    :modules="modules"
    class="my-swiper"
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"

  >
    <swiper-slide v-for="(review, index) in reviews" :key="index">
      <div class="bg-white px-[2rem] py-[2rem] h-full rounded-[24px] flex flex-col">
        <div class="w-fit mx-auto mb-[2rem]">
          <img :src="review.image" :alt="review.name" width="70px">
        </div>
        <p>{{ review.message }}</p>
        <h5 class="text-center mt-[2rem] font-[700] font-dm-sans">{{ review.name }}</h5>
      </div>
    </swiper-slide>
  </swiper>
  </div>
  <div v-else-if="width <= 1024 && width > 640">
    <swiper
    :slides-per-view="2"
    :space-between="50"
    :modules="modules"
    class="my-swiper"
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"

  >
    <swiper-slide v-for="(review, index) in reviews" :key="index">
      <div class="bg-white px-[2rem] py-[2rem] h-full rounded-[24px] flex flex-col">
        <div class="w-fit mx-auto mb-[2rem]">
          <img :src="review.image" :alt="review.name" width="70px">
        </div>
        <p>{{ review.message }}</p>
        <h5 class="text-center mt-[2rem] font-[700] font-dm-sans">{{ review.name }}</h5>
      </div>
    </swiper-slide>
  </swiper>
  </div>
  <div v-else>
    <swiper
    :slides-per-view="1"
    :space-between="50"
    :modules="modules"
    class="my-swiper"
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"

  >
    <swiper-slide v-for="(review, index) in reviews" :key="index">
      <div class="bg-white px-[2rem] py-[2rem] h-full rounded-[24px] flex flex-col">
        <div class="w-fit mx-auto mb-[2rem]">
          <img :src="review.image" :alt="review.name" width="70px">
        </div>
        <p>{{ review.message }}</p>
        <h5 class="text-center mt-[2rem] font-[700] font-dm-sans">{{ review.name }}</h5>
      </div>
    </swiper-slide>
  </swiper>
  </div>
  </div>
  </main>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  import { Pagination, Navigation, Autoplay } from 'swiper/modules';
  import { useWindowSize } from '@vueuse/core'

  const { width, height } = useWindowSize()  
  const modules = [Autoplay, Pagination, Navigation]

  import image1 from '../../assets/images/Avatar Image.png';
  import image2 from '../../assets/images/Avatar Image (1).png';
  import image3 from '../../assets/images/Avatar Image (2).png';
  import image4 from '../../assets/images/Avatar Image (3).png';
  import image5 from '../../assets/images/Avatar Image (4).png';

  const reviews = [
    {
      name: "LIAM BROWN",
      image: image1,
      message: "The hoses are incredibly durable and reliable. They've significantly improved my operational efficiency."
    },
    {
      name: "MICHAEL RODRIGUEZ",
      image: image2,
      message: "I'm impressed with the quality of the lay-flat hoses. They are built to last and withstand tough conditions, providing consistent performance even under high-pressure applications."
    },
    {
      name: "MICHAEL THOMPSON",
      image: image3,
      message: "I've been using hoses from this company for years, and they have never let us down. Their commitment to quality is unparalleled and keeps us coming back for all our hose needs."
    },
    {
      name: "DAVID WILSON",
      image: image4,
      message: "Great customer service and excellent hoses! We are very pleased with our purchase and will definitely return."
    },
    {
      name: "ALEX NGUYEN",
      image: image5,
      message: "The quality of the rubber hoses is unmatched. They have become an integral part of our operations, providing consistent performance and reliability in every use."
    }
  ];

  const onSwiper = (swiper) => {
    console.log(swiper);
  };

  const onSlideChange = () => {
    console.log('slide change');
  };
</script>

<style scoped>
  @import "swiper/swiper-bundle.css";

  .my-swiper {
    width: 100%;
    padding-bottom: 50px; /* Ensure space for the scrollbar */
  }
</style>
