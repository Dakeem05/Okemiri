<!-- src/components/WarehouseInfo.vue -->
<template>
  <div class="flex flex-col md:flex-row items-center justify-between py-10 px-4 md:px-20 bg-white">
    <!-- Open Hours -->
    <div class="relative bg-[#00CCFF] text-white p-6 rounded-lg shadow-md w-full md:w-1/3 mb-8 md:mb-0">
      <div class="absolute inset-0 transform translate-x-4 translate-y-4 bg-black rounded-lg "></div>
      <div class="relative z-10 p-10">
        <h3 class="text-lg font-bold mb-4">Open Hours:</h3>
        <p class="mb-4">We supply the best and highest quality rubber hose, suction hose, lay flat hose, plastic rubber hose,</p>
        <ul class="space-y-2">
          <li> <span class="font-bold">Mondays - Fridays:</span> 8am to 6pm</li>
          <li> <span class="font-bold">Saturdays:</span> 9am - 6pm</li>
          <li> <span class="font-bold">Sundays:</span> 11am - 4pm</li>
        </ul>
      </div>
    </div>

    <!-- Visit our Warehouse -->
    <div class="w-full md:w-1/2 text-center md:text-left">
      <div class="mb-6">
        <h2 class="text-[64px] leading-[76.8px] font-poppins font-semibold mb-4">Visit our Warehouse</h2>
        <p class="text-[24px]">Experience Okemiri Hose firsthand. Visit our warehouse to explore our range and quality. Our team is ready to assist you. Schedule your visit today!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional script is needed for this example
</script>

<style scoped>
/* Additional styles can be added here if needed */
</style>
