<!-- src/components/FaqsSection.vue -->
<template>
  <div class="w-[80%] mx-auto py-10">
    <h2 class="text-2xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
    <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
      <button 
        @click="toggle(index)" 
        class="w-full text-left bg-gray-200 p-4 rounded-md shadow-md focus:outline-none">
        {{ faq.question }}
      </button>
      <div v-show="activeIndex === index" class="mt-2 bg-white p-4 border-l-2 border-blue-500 rounded-md shadow-md">
        {{ faq.answer }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref(null);
const faqs = ref([
  { question: "What is an HPI Check?", answer: "An HPI Check is a comprehensive vehicle history report that checks for outstanding finance, write-offs, stolen vehicles, and more." },
  { question: "How Much does HPI Check Cost?", answer: "The cost of an HPI Check varies depending on the provider and the level of detail required, typically ranging from $10 to $30." },
  { question: "Is there a Cheaper alternative to HPI Check?", answer: "There are cheaper alternatives to HPI Check, such as basic vehicle history reports, but they may not provide as much detailed information." },
  { question: "Why Perform a Vehicle History Check with Carcheck?", answer: "Carcheck provides a detailed and reliable vehicle history report, ensuring you make an informed decision when purchasing a used vehicle." },
  { question: "What are the differences between a Vehicle History Check and a Vehicle Pre-purchase Inspection?", answer: "A Vehicle History Check looks into the past of the vehicle for any issues, while a Pre-purchase Inspection involves a physical examination of the car's current condition." }
]);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
