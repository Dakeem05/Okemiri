<template>
  <main class="max-w-7xl mx-auto relative">
    <div class="py-[50px]">
      <div class="flex flex-col lg:flex-row gap-10 relative">
        <div class="w-full lg:w-[40%] px-10">
          <h1
            class="font-[700] text-[2.5rem] lg:text-[3.5rem] font-plus-jakarta-sans pt-0 lg:pt-20 "
          >
            Our Product Catalog
          </h1>
          <p class="mt-[2rem] font-poppins text-[1.25rem] lg:text-[1.5rem] leading-loose">
            Discover our extensive range of durable hoses at Okemiri Hose, where
            quality is always guaranteed.
          </p>
        </div>
        <div class="lg:flex-col flex flex-col-reverse">
          <form
            @submit.prevent="handleSearch"
            class="flex items-center rounded-full pt-5 lg:pt-0 px-10 lg:px-0"
          >
            <input
              v-model="searchTerm"
              type="text"
              placeholder="Look for products..."
              class="w-full lg:w-[80%] bg-white px-4 py-4 text-sm border border-[#1D1E1C80] rounded-full focus:outline-none"
            />
          </form>
          <div class="pt-3 lg:pt-10 px-10 lg:px-0">
            <img
              src="../../assets/images/product1.png"
              alt="Product 1"
              class="w-full"
            />
          </div>
        </div>
      </div>
      <div
        class="py-20 px-5 gap-10 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4"
      >
        <Productscard
          v-for="product in searchResults"
          :key="product.id"
          :title="product.name"
          :description="product.description"
          :image="product.image"
        />
      </div>
      <homeReviews></homeReviews>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import Productscard from "../../components/Products/card.vue";
import homeReviews from "../../components/home/Reviews.vue";

import pumpCasingImage from "../../assets/images/pump.png";
import pulleyImage from "../../assets/images/pulley.png";
import dredgingSuctionHoseImage from "../../assets/images/dredge.png";
import camlockCouplingImage from "../../assets/images/camplock.png";
import flangesImage from "../../assets/images/flanges.png";
import layFlatHoseImage from "../../assets/images/layflathose.png";
import plasticRubberHose from "../../assets/images/plasticrubberhose.png";
import sandPump from "../../assets/images/sandpump.png";
import powerTakeOff from "../../assets/images/powertakeoff.png";
import floaterHose from "../../assets/images/floaterhose.png";
import hoseSleeves from "../../assets/images/hosesleeves.png";
import strongThroatClamp from "../../assets/images/strongthroatclamp.png";
import duralineHose from "../../assets/images/duralinehose.png";
import nipples from "../../assets/images/nipples.png";
import innerGear from "../../assets/images/innergear.png";

const searchTerm = ref("");
const products = ref([
  {
    id: 1,
    name: "Pump Casing",
    description: "Encloses pump components, directs fluid flow efficiently",
    image: pumpCasingImage,
  },
  {
    id: 2,
    name: "Pulley",
    description: "Simple machine for lifting with mechanical advantage",
    image: pulleyImage,
  },
  {
    id: 3,
    name: "Dredging Suction Hose",
    description:
      "Flexible, durable hose for efficient underwater sediment removal",
    image: dredgingSuctionHoseImage,
  },
  {
    id: 4,
    name: "Camlock Coupling",
    description: "Quick, secure, leak-proof connection for fluid transfer",
    image: camlockCouplingImage,
  },
  {
    id: 5,
    name: "Flanges",
    description: "Connecting pipes securely with strength and precision rings.",
    image: flangesImage,
  },
  {
    id: 6,
    name: "Lay Flat Hose",
    description: "Flexible, durable hose for low-pressure water distribution.",
    image: layFlatHoseImage,
  },
  {
    id: 7,
    name: "Plastic & Rubber Hose",
    description: "Flexible tubing made from durable synthetic materials.",
    image: plasticRubberHose,
  },
  {
    id: 8,
    name: "Sand Pump",
    description:
      "Powerful device moving sand for various industrial applications",
    image: sandPump,
  },
  {
    id: 9,
    name: "Power Take-Off",
    description: "Engine-driven power transfer for external equipmenty",
    image: powerTakeOff,
  },
  {
    id: 10,
    name: "Floater Hose",
    description: "Flexible tubing for fluid transfer in aquatic environments.",
    image: floaterHose,
  },
  {
    id: 11,
    name: "Hose Sleeves",
    description: "Protective covering for hoses, shields against abrasion.",
    image: hoseSleeves,
  },
  {
    id: 12,
    name: "Strong Throat Clamp",
    description: "Powerful grip for secure and steady handling",
    image: strongThroatClamp,
  },
  {
    id: 13,
    name: "Duraline Hose",
    description:
      "Flexible, durable hose for varied industrial fluid applications.",
    image: duralineHose,
  },
  {
    id: 14,
    name: "Nipples",
    description: " Durable connectors for seamless hose connections",
    image: nipples,
  },
  {
    id: 15,
    name: "Inner Gear",
    description: "Precision hose accessory for peak performance ",
    image: innerGear,
  },
]);

const searchResults = ref([...products.value]);

const handleSearch = () => {
  searchResults.value = products.value.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
};
</script>

<style scoped>
.box {
  box-shadow: 0px 1.98px 3.96px 0px #0000001a;
}
</style>
