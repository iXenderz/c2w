<template>
  <header class="font-sans tracking-wide absolute w-full z-50">
    <div class="flex flex-wrap p-10 relative">
      <!-- Mobile menu container: hidden by default on mobile, visible on desktop -->
      <div
        id="collapseMenu"
        :class="{
          hidden: !isMobileMenuOpen,
          block: isMobileMenuOpen,
          'bg-white shadow-lg rounded-lg lg:!block': true,
          // Fullscreen sidebar styles when menu is open
          'fixed top-0 left-0 w-full h-full overflow-auto z-50 before:fixed before:inset-0 before:z-40 before:pointer-events-none':
            isMobileMenuOpen,
        }"
      >
        <button
          id="toggleClose"
          class="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          @click="toggleMenu(false)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 fill-black"
            viewBox="0 0 320.591 320.591"
          >
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
            />
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
            />
          </svg>
        </button>

        <RouterLink
          :to="{ name: 'home' }"
          class="leading-10 hidden lg:block hover:text-[#007bff] text-red-600 block text-lg m-3 absolute"
        >
          <img src="/c2w-logo.png" class="mx-auto object-contain" width="90" />
        </RouterLink>

        <ul class="lg:px-4 lg:py-0 lg:ml-24 ff-normal lg:flex gap-x-4">
          <li class="max-lg:border-b max-lg:px-3 max-lg:py-3">
            <RouterLink
              :to="{ name: 'home' }"
              class="leading-10 hover:text-[#007bff] text-red-600 block text-2xl"
            >
              HOME
            </RouterLink>
          </li>
          <li class="max-lg:border-b max-lg:px-3 max-lg:py-3">
            <RouterLink
              :to="{ name: 'about' }"
              class="leading-10 hover:text-[#007bff] text-red-600 block text-2xl"
            >
              ABOUT
            </RouterLink>
          </li>
          <li class="max-lg:border-b max-lg:px-3 max-lg:py-3">
            <RouterLink
              :to="{ name: 'mission' }"
              class="leading-10 hover:text-[#007bff] text-red-600 block text-2xl"
            >
              MISSION
            </RouterLink>
          </li>
          <li class="max-lg:border-b max-lg:px-3 max-lg:py-3">
            <RouterLink
              :to="{ name: 'seminary' }"
              class="leading-10 hover:text-[#007bff] text-red-600 block text-2xl"
            >
              SEMINARY
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Toggle button for mobile menu with new button style burger icon -->
      <div id="toggleOpen" class="flex ml-auto lg:hidden">
        <button
          @click="toggleMenu(true)"
          class="flex flex-col justify-between w-8 h-8 focus:outline-none bg-red-800 p-2 rounded-md"
        >
          <span class="block w-full h-0.5 bg-white"></span>
          <span class="block w-full h-0.5 bg-white"></span>
          <span class="block w-full h-0.5 bg-white"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMenu(open) {
      this.isMobileMenuOpen = open;
    },
  },
};
</script>
