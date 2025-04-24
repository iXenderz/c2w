<template>
  <div
    class="text-white ff-normal p-6 bg-cover bg-center"
    :style="{ backgroundImage: `url(${mobileBgUrl})` }"
  >
    <div class="container mx-auto max-w-md">
      <!-- Section 1: GOD GAVE CHRIST -->
      <section class="text-center mb-16 pt-6">
        <h1
          class="text-4xl sm:text-5xl font-bold text-yellow-400 mb-1 shadow-white/50 text-shadow"
        >
          GOD
        </h1>
        <h2
          class="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2 shadow-white/50 text-shadow"
        >
          GAVE
        </h2>
        <h1
          class="text-5xl sm:text-6xl font-extrabold text-white mb-1 shadow-black/30 text-shadow-lg"
        >
          CHRIST
        </h1>
        <h2
          class="text-3xl sm:text-4xl font-bold text-white mb-1 shadow-black/30 text-shadow"
        >
          TO
        </h2>
        <h2
          class="text-3xl sm:text-4xl font-bold text-white mb-1 shadow-black/30 text-shadow"
        >
          THE
        </h2>
        <h1
          class="text-5xl sm:text-6xl font-extrabold text-white mb-4 shadow-black/30 text-shadow-lg"
        >
          WORLD
        </h1>
        <p class="text-base sm:text-lg italic text-gray-200 leading-relaxed">
          For God so loved the world that he gave his one and only Son, that
          whoever believes in him shall not perish but have eternal life.
          <span class="block text-sm text-gray-300 mt-1">John 3:16</span>
        </p>
      </section>

      <!-- Section 2: Partner as CHURCH -->
      <section
        class="text-center mb-12 p-6 bg-black bg-opacity-30 rounded-lg shadow-xl"
      >
        <!-- Heading content -->
        <h2 class="text-xl sm:text-2xl font-semibold text-yellow-300 mb-1">
          Partner With Us
        </h2>
        <h3 class="text-lg sm:text-xl font-semibold text-yellow-300 mb-2">
          as a
        </h3>
        <h2 class="text-3xl sm:text-4xl font-bold mb-1">CHURCH</h2>
        <p class="text-xl sm:text-2xl font-bold mb-1">
          Body of <span class="text-white font-extrabold">CHRIST</span>
        </p>
        <p class="text-sm text-gray-300 mb-6">
          Now you are the body of Christ,
          <span class="block sm:inline">1 Corinthians 12:27</span>
        </p>
        <!-- Link container -->
        <div
          class="space-y-4 text-left sm:text-center border-t border-white/10 pt-4"
        >
          <div
            v-for="(link, index) in churchLinks"
            :key="link.route.hash"
            :class="[
              link.colorMobile || 'text-blue-200',
              index > 0 ? 'border-t border-white/10 pt-4' : '',
            ]"
          >
            <RouterLink
              :to="link.route"
              class="text-lg font-medium underline hover:text-blue-100 cursor-pointer block sm:inline"
            >
              {{ link.text }}
            </RouterLink>
            <p class="text-xs text-gray-300">{{ link.verse }}</p>
          </div>
        </div>
      </section>

      <!-- Section 3: Partner as BELIEVER -->
      <section
        class="text-center mb-12 p-6 bg-black bg-opacity-30 rounded-lg shadow-xl"
      >
        <!-- Heading content -->
        <h2 class="text-xl sm:text-2xl font-semibold text-yellow-300 mb-1">
          Partner With Us
        </h2>
        <h3 class="text-lg sm:text-xl font-semibold text-yellow-300 mb-2">
          as a
        </h3>
        <h2 class="text-3xl sm:text-4xl font-bold mb-1">BELIEVER</h2>
        <p class="text-xl sm:text-2xl font-bold mb-1">
          <span class="text-white font-extrabold">CHRIST</span> in YOU
        </p>
        <p class="text-sm text-gray-300 mb-6">
          Christ in you, the hope of glory
          <span class="block sm:inline">Colossians 1:27</span>
        </p>
        <!-- Link container -->
        <div
          class="space-y-4 text-left sm:text-center border-t border-white/10 pt-4"
        >
          <div
            v-for="(link, index) in believerLinks"
            :key="link.route.hash"
            :class="[
              link.colorMobile || 'text-blue-200',
              index > 0 ? 'border-t border-white/10 pt-4' : '',
            ]"
          >
            <RouterLink
              :to="link.route"
              class="text-lg font-medium underline hover:text-blue-100 cursor-pointer block sm:inline"
            >
              {{ link.text }}
            </RouterLink>
            <p class="text-xs text-gray-300">{{ link.verse }}</p>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="text-center mt-16 border-t border-white/30">
        <div class="px-4 py-8 bg-black bg-opacity-60">
          <h2
            class="text-3xl sm:text-4xl font-bold text-red-500 mb-3 tracking-wide"
          >
            HIS MISSION IS OUR MISSION
          </h2>
          <p class="text-base sm:text-lg italic text-gray-200 leading-relaxed">
            "As the Father has sent Me, so also I am sending you."
            <span class="block text-sm text-gray-300 mt-1">John 20:21</span>
          </p>
        </div>
      </footer>
    </div>
    <!-- End container -->
  </div>
  <!-- End component root -->
</template>

<script setup>
import { RouterLink } from "vue-router";

// Props definition remains the same
const props = defineProps({
  churchLinks: { type: Array, required: true },
  believerLinks: { type: Array, required: true },
  mobileBgUrl: { type: String, default: "/assets/R10171_product.webp" },
});
</script>

<style scoped>
/* Text shadow utility definitions (if used/needed) */
/*
@layer utilities {
  .text-shadow { text-shadow: 1px 1px 2px var(--tw-shadow-color, rgba(0,0,0,0.5)); }
  .text-shadow-lg { text-shadow: 2px 2px 4px var(--tw-shadow-color, rgba(0,0,0,0.5)); }
}
*/

/* Define ff-normal if needed */
.ff-normal {
  /* font-family: 'Your Font Name', sans-serif; */
}
</style>
