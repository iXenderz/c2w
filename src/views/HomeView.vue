<template>
  <Hero />

  <!-- Container for the responsive section -->
  <div class="container mx-auto lg:pt-12 lg:px-3">
    <!-- Mobile View Component: Show by default, hide on lg screens and up -->
    <MobileMissionView
      class="lg:hidden"
      :church-links="churchLinks"
      :believer-links="believerLinks"
      :mobile-bg-url="mobileBackgroundImageUrl"
    />

    <!-- Desktop View Component: Hide by default, show on lg screens and up -->
    <DesktopMissionView
      class="hidden lg:block"
      :church-links="churchLinks"
      :believer-links="believerLinks"
      :desktop-bg-url="desktopBackgroundImageUrl"
    />
  </div>

  <Caroucel id="#taking-the-church" />
  <FooterBar />
</template>

<script setup>
import { ref } from "vue";
// RouterLink might not be needed here anymore if Hero/Footer don't use it directly

// Import your components
import Hero from "@/components/Hero.vue"; // Adjust path as needed
import Caroucel from "@/components/Caroucel.vue"; // Adjust path as needed
import FooterBar from "@/components/FooterBar.vue"; // Adjust path as needed
import MobileMissionView from "@/components/MobileMissionView.vue"; // Adjust path as needed
import DesktopMissionView from "@/components/DesktopMissionView.vue"; // Adjust path as needed

// --- Define the Link Data ONCE ---
const churchLinks = ref([
  {
    route: { name: "church", hash: "#making-disciples" },
    text: "Making Disciples",
    verse: "Matt 28:19-20",
    colorDesktop: "text-blue-200",
    colorMobile: "text-blue-200",
  },
  {
    route: { name: "church", hash: "#share-with-the-needy" },
    text: "Share With the Needy",
    verse: "Acts 2:44",
    colorDesktop: "text-blue-600",
    colorMobile: "text-blue-200",
  },
  {
    route: { name: "church", hash: "#send-workers-to-harvest" },
    text: "Send Workers to the Harvest",
    verse: "Luke 10:2",
    colorDesktop: "text-blue-700",
    colorMobile: "text-blue-200",
  },
  {
    route: { name: "church", hash: "#establish-a-c2w-center" },
    text: "Taking Your Church to the World",
    verse: "Acts 2:44",
    colorDesktop: "text-blue-800",
    colorMobile: "text-blue-200",
  },
]);

const believerLinks = ref([
  {
    route: { name: "believer", hash: "#discipleship-for-true-believers" },
    text: "Making Disciples",
    verse: "Matt 28:19-20",
    colorDesktop: "text-blue-200",
    colorMobile: "text-blue-200",
  },
  {
    route: { name: "believer", hash: "#share-with-the-needy" },
    text: "Give to the Poor",
    verse: "Mark 10:21",
    colorDesktop: "text-slate-200",
    colorMobile: "text-blue-200",
  },
  {
    route: { name: "believer", hash: "#send-workers-to-harvest" },
    text: "Send Workers to the Harvest",
    verse: "Luke 10:2",
    colorDesktop: "text-slate-100",
    colorMobile: "text-blue-200",
  },
]);
// --- End Link Data ---

// --- Define Background Image URLs ---
// Ensure these paths are correct relative to your project's 'public' directory
const mobileBackgroundImageUrl = "'R10171_product.webp'";
const desktopBackgroundImageUrl = "'GOD gave Mission.jpg'";
// --- End Background Image URLs ---
</script>

<style scoped>
/* Add specific styles for the landing page if needed */
/* .ff-narrow definition is now moved to DesktopMissionView.vue */
</style>
