<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <TopBar />
  <div
    class="font-[sans-serif] mx-auto"
    style="
      background-image: url(/hero-bg.jpg);
      background-size: cover;
      background-position: bottom;
      height: 100vh;
    "
  >
    <div class="p-5 py-14 grid items-end md:gap-10 gap-6 h-full">
      <div class="text-center" style="max-width: 880px; margin: 0 auto">
        <div class="mt-5 px-10 flex justify-center ff-normal">
          <!-- <RouterLink
            :to="{ name: 'mission' }"
            type="button"
            class="text-white font-medium rounded-3xl px-6 py-2.5 me-2 mb-2 text-2xl"
            style="background-color: rgb(79 215 131 / 32%)"
          >
            Join Us to Serve the Lord as a
            <b class="font-bold underline mx-3">CHRUCH</b> as a
            <b class="font-bold underline mx-3">BELIEVER</b>
          </RouterLink> -->
          <button
            type="button"
            class="text-white font-medium rounded-3xl px-6 py-2.5 me-2 mb-2 text-2xl"
            style="
              background-color: rgb(79 215 131 / 32%);
              backdrop-filter: blur(3px);
            "
          >
            Join Us to Serve the Lord as a
            <RouterLink
              :to="{ name: 'church' }"
              class="font-bold underline mx-3"
              >CHURCH</RouterLink
            >
            as a
            <RouterLink
              :to="{ name: 'believer' }"
              class="font-bold underline mx-3"
              >BELIEVER</RouterLink
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
