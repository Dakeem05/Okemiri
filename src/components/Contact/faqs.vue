<!-- src/components/FaqsSection.vue -->
<template>
  <div class="w-[80%] mx-auto py-10">
    <h2 class="text-2xl font-semibold text-center mb-6">
      Frequently Asked Questions
    </h2>
    <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
      <button
        @click="toggle(index)"
        class="w-full text-left bg-gray-200 p-4 rounded-md shadow-md focus:outline-none"
      >
        {{ faq.question }}
      </button>
      <div
        v-show="activeIndex === index"
        class="mt-2 bg-white p-4 border-l-2 border-blue-500 rounded-md shadow-md"
      >
        {{ faq.answer }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const activeIndex = ref(null);
const faqs = ref([
  { question: "What types of hoses do you offer?", answer: "We offer a wide variety of hoses including hydraulic hoses, industrial hoses, air hoses, water hoses, and specialty hoses designed for specific applications. Our extensive selection ensures you find the right hose for your needs." },
  { question: "How do I choose the right hose for my application?", answer: "Choosing the right hose depends on several factors such as the type of fluid, pressure, temperature, and environment. Our experienced team is available to assist you in selecting the most suitable hose for your specific application." },
  { question: "Do you provide custom hose solutions?", answer: "Yes, we offer custom hose solutions tailored to your specific requirements. Whether you need a particular length, fitting, or material, we can customize our products to meet your exact specifications." },
  { question: "What industries do you serve?", answer: "We serve a diverse range of industries including agriculture, construction, manufacturing, automotive, and more. Our hoses are designed to meet the demands of various industrial applications." },
  { question: "How can I place an order or request a quote?", answer: "You can easily place an order or request a quote by contacting us through our website, via email, or by phone. Our customer service team is ready to assist you with your order and answer any questions you may have." }
]);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
