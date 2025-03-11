<script setup>
import { Analytics } from "@vercel/analytics/vue";
</script>
<template>
  <Analytics />
  <RouterView />
  <div class="ff-normal fixed bottom-6 right-6 z-50">
    <div class="group relative">
      <button
        class="bg-red-700 p-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group-hover:bg-red-50"
        aria-label="Contact Us"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="w-5 h-5 text-gray-100"
          fill="currentColor"
        >
          <path
            d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
          />
          <path
            d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
          />
        </svg>
      </button>

      <div
        class="absolute bottom-full right-0 mb-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2"
      >
        <div class="bg-white rounded-lg shadow-lg p-4 w-72">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-gray-800 font-medium text-sm">Contact Us</h3>
            <div class="h-1 w-10 bg-red-600 rounded"></div>
          </div>
          <div class="space-y-3">
            <a
              href="mailto:williamleong430@gmail.com"
              class="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors duration-200"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                />
              </svg>
              <span>williamleong430@gmail.com</span>
            </a>
            <a
              href="mailto:support@c2wms.com"
              class="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors duration-200"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                />
              </svg>
              <span>support@c2wms.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
