<template>
  <header class="font-sans tracking-wide absolute w-full z-50">
    <div class="flex flex-wrap p-10 relative">
      <div
        id="collapseMenu"
        class="bg-white shadow-lg rounded-lg max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50"
      >
        <button
          id="toggleClose"
          class="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
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
          class="leading-10 hover:text-[#007bff] text-red-600 block text-lg m-3 absolute shadow-lg"
        >
          <img src="/c2w-logo.png" class="mx-auto object-contain" width="90" />
        </RouterLink>

        <ul
          class="px-4 py-0 ml-24 ff-normal lg:flex gap-x-4 max-lg:fixed max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:h-full max-lg:overflow-auto z-50"
        >
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

      <div id="toggleOpen" class="flex ml-auto lg:hidden">
        <button>
          <svg
            class="w-7 h-7"
            fill="#000"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
