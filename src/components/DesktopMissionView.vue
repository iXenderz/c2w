<template>
  <div
    class="mx-auto rounded-lg bg-cover bg-center relative shadow-lg"
    :style="{
      width: '800px', // Fixed width for desktop
      aspectRatio: '800 / 533.17', // Maintain aspect ratio
      backgroundImage: `url(${desktopBgUrl})`, // Use prop for URL
    }"
  >
    <div class="flex items-end h-full">
      <!-- Desktop Church Links Column -->
      <div
        class="text-center ff-narrow w-1/2 h-[310px] pe-6 opacity-95 text-lg flex flex-col gap-4 pb-4"
      >
        <!-- Loop through the churchLinks prop -->
        <div
          v-for="link in churchLinks"
          :key="link.route.hash"
          :class="link.colorDesktop"
        >
          <RouterLink
            :to="link.route"
            class="underline font-bold block hover:opacity-80"
            style="line-height: 0.6em"
          >
            {{ link.text }}
          </RouterLink>
          <span class="text-sm">{{ link.verse }}</span>
        </div>
      </div>
      <!-- Desktop Believer Links Column -->
      <div
        class="text-center ff-narrow w-1/2 h-[310px] ps-16 opacity-95 text-lg flex flex-col gap-4 pb-4"
      >
        <!-- Loop through the believerLinks prop -->
        <div
          v-for="link in believerLinks"
          :key="link.route.hash"
          :class="link.colorDesktop"
        >
          <RouterLink
            :to="link.route"
            class="underline font-bold block hover:opacity-80"
            style="line-height: 0.6em"
          >
            {{ link.text }}
          </RouterLink>
          <span class="text-sm">{{ link.verse }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

// Define the props this component accepts
const props = defineProps({
  churchLinks: {
    type: Array,
    required: true,
  },
  believerLinks: {
    type: Array,
    required: true,
  },
  desktopBgUrl: {
    type: String,
    default: "/GOD gave Mission.jpg", // Default background image path (relative to public folder)
  },
});

// No internal refs needed for links as they come from props
</script>

<style scoped>
/* Define your ff-narrow font-family here if it's not globally defined */
.ff-narrow {
  /* font-family: 'Your Narrow Font Name', sans-serif; */
}

/* Add any other styles specific only to the desktop view */
</style>
