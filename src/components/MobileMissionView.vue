<template>
  <div
    class="text-white ff-normal p-6 bg-cover bg-center"
    :style="{ backgroundImage: `url(${mobileBgUrl})` }"
  >
    <div class="container mx-auto max-w-md">
      <!-- Section 1: GOD GAVE CHRIST -->
      <section class="text-center mb-16 pt-6">
        <h1
          class="text-8xl sm:text-5xl font-bold text-yellow-400 shadow-white/50 text-shadow ff-stencil"
        >
          GOD
        </h1>
        <h2
          class="text-3xl sm:text-3xl font-[900] font-mono text-yellow-400 shadow-white/50 text-shadow"
        >
          GAVE
        </h2>
        <div class="mt-4 mb-8">
          <h1
            class="text-5xl sm:text-6xl font-extrabold text-white mb-1 shadow-black/30 text-shadow-lg"
          >
            CHRIST
          </h1>
          <h2
            class="text-3xl sm:text-4xl font-bold text-white shadow-black/30 text-shadow"
          >
            TO THE
          </h2>
          <h2
            class="text-3xl sm:text-4xl font-bold text-white mb-1 shadow-black/30 text-shadow"
          ></h2>
          <h1
            class="text-5xl sm:text-6xl font-extrabold text-white shadow-black/30 text-shadow-lg"
          >
            WORLD
          </h1>
        </div>
        <p class="text-base sm:text-lg italic text-gray-200 leading-relaxed">
          For God so loved the world that he gave his one and only Son, that
          whoever believes in him shall not perish but have eternal life.
          <span class="block text-sm text-gray-300 mt-1">John 3:16</span>
        </p>
      </section>

      <!-- Section 2: Partner as CHURCH -->
      <section
        class="p-6 rounded-sm mb-8 shadow-2xl bg-gradient-to-br from-black/70 via-slate-900/60 to-black/70 flex flex-col items-center overflow-hidden relative"
      >
        <!-- Modern decorative elements -->
        <div
          class="absolute top-0 left-0 w-24 h-24 bg-yellow-500/10 rounded-full -translate-x-12 -translate-y-12 blur-xl"
        ></div>
        <div
          class="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/15 rounded-full translate-x-16 translate-y-16 blur-xl"
        ></div>

        <!-- Header with modern design -->
        <div class="mb-8 text-center relative z-10">
          <h2
            class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500"
          >
            Partner With Us
          </h2>
          <div class="flex items-center justify-center gap-3 my-2">
            <div
              class="h-px w-12 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"
            ></div>
            <h3 class="text-lg font-medium text-yellow-300/90">as a</h3>
            <div
              class="h-px w-12 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"
            ></div>
          </div>
          <h2
            class="text-4xl font-extrabold mt-3 tracking-wider bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300"
          >
            CHURCH
          </h2>
          <p class="text-2xl font-bold mt-2">
            Body of
            <span class="text-white font-extrabold relative inline-block">
              CHRIST
              <span
                class="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              ></span>
            </span>
          </p>

          <!-- Scripture reference with modern styling -->
          <div class="mt-4 mb-6 flex flex-col items-center">
            <p class="text-sm text-gray-300 italic">
              "Now you are the body of Christ"
            </p>
            <div class="flex items-center gap-2 mt-2">
              <span class="text-xs text-gray-400 tracking-wide"
                >1 Corinthians 12:27</span
              >
            </div>
          </div>
        </div>

        <!-- Interactive links section -->
        <div class="w-full space-y-3">
          <div
            v-for="(link, index) in churchLinks"
            :key="link.route.hash"
            class="relative overflow-hidden rounded-xl group"
          >
            <div
              class="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-blue-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div
              class="py-4 px-3 text-center relative z-10 group-hover:transform group-hover:scale-[1.02] transition-transform duration-200"
            >
              <RouterLink
                :to="link.route"
                class="text-lg font-medium text-blue-200 group-hover:text-blue-100 block"
              >
                {{ link.text }}
              </RouterLink>
              <p class="text-xs text-gray-400 mt-1.5 opacity-80">
                {{ link.verse }}
              </p>
              <div
                class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-400/50 group-hover:w-3/4 transition-all duration-300"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Partner as BELIEVER -->
      <section
        class="p-6 rounded-sm shadow-2xl bg-gradient-to-br from-black/70 via-slate-900/60 to-black/70 flex flex-col items-center overflow-hidden relative mb-12"
      >
        <!-- Modern decorative elements -->
        <div
          class="absolute top-0 left-0 w-24 h-24 bg-yellow-500/10 rounded-full -translate-x-12 -translate-y-12 blur-xl"
        ></div>
        <div
          class="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/15 rounded-full translate-x-16 translate-y-16 blur-xl"
        ></div>

        <!-- Header with modern design -->
        <div class="mb-8 text-center relative z-10">
          <h2
            class="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500"
          >
            Partner With Us
          </h2>
          <div class="flex items-center justify-center gap-3 my-2">
            <div
              class="h-px w-12 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"
            ></div>
            <h3 class="text-lg sm:text-xl font-medium text-yellow-300/90">
              as a
            </h3>
            <div
              class="h-px w-12 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"
            ></div>
          </div>
          <h2
            class="text-3xl sm:text-4xl font-extrabold mt-3 tracking-wider bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300"
          >
            BELIEVER
          </h2>
          <p class="text-xl sm:text-2xl font-bold mt-2">
            <span class="text-white font-extrabold relative inline-block">
              CHRIST
              <span
                class="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              ></span>
            </span>
            in YOU
          </p>

          <!-- Scripture reference with modern styling -->
          <div class="mt-4 mb-6 flex flex-col items-center">
            <p class="text-sm text-gray-300 italic">
              "Christ in you, the hope of glory"
            </p>
            <div class="flex items-center gap-2 mt-2">
              <span class="text-xs text-gray-400 tracking-wide"
                >Colossians 1:27</span
              >
            </div>
          </div>
        </div>

        <!-- Interactive links section -->
        <div class="w-full space-y-3">
          <div
            v-for="(link, index) in believerLinks"
            :key="link.route.hash"
            class="relative overflow-hidden rounded-xl group"
          >
            <div
              class="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-blue-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div
              class="py-4 px-3 text-center relative z-10 group-hover:transform group-hover:scale-[1.02] transition-transform duration-200"
            >
              <RouterLink
                :to="link.route"
                class="text-lg font-medium text-blue-200 group-hover:text-blue-100 block"
              >
                {{ link.text }}
              </RouterLink>
              <p class="text-xs text-gray-400 mt-1.5 opacity-80">
                {{ link.verse }}
              </p>
              <div
                class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-400/50 group-hover:w-3/4 transition-all duration-300"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="mt-8 relative overflow-hidden">
        <!-- Decorative top border with gradient -->
        <div
          class="h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
        ></div>

        <!-- Main footer content with improved background -->
        <div
          class="px-4 py-10 sm:py-12 bg-gradient-to-b from-black/80 to-black/70 relative"
        >
          <!-- Decorative elements -->
          <div
            class="absolute top-0 left-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-xl"
          ></div>
          <div
            class="absolute bottom-0 right-1/4 w-28 h-28 bg-blue-500/10 rounded-full blur-xl"
          ></div>

          <!-- Main content -->
          <div class="relative z-10 max-w-3xl mx-auto text-center">
            <h2
              class="text-3xl sm:text-4xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-400 to-red-500 mb-4"
            >
              HIS MISSION IS OUR MISSION
            </h2>

            <!-- Scripture with improved styling -->
            <div class="inline-block relative">
              <span class="absolute -left-3 top-0 text-2xl text-gray-500/40"
                >"</span
              >
              <p
                class="text-base sm:text-lg italic text-gray-200 leading-relaxed px-4"
              >
                As the Father has sent Me, so also I am sending you.
              </p>
              <span class="absolute -right-3 bottom-0 text-2xl text-gray-500/40"
                >"</span
              >
            </div>

            <!-- Scripture reference with modern styling -->
            <div class="mt-3 flex items-center justify-center">
              <div class="h-px w-6 bg-gray-500/30"></div>
              <span class="mx-3 text-sm text-gray-400 tracking-wider"
                >John 20:21</span
              >
              <div class="h-px w-6 bg-gray-500/30"></div>
            </div>
          </div>
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
