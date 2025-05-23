<template>
  <RouterLink :to="{ name: 'home' }">
    <Button
      class="ff-normal px-5 fixed m-4 z-10"
      severity="contrast"
      label="Back"
    ></Button>
  </RouterLink>
  <div class="grid place-items-center h-screen background">
    <div class="h-[90vh] relative">
      <div class="h-full w-full absolute">
        <RouterLink
          class="inline-block h-full w-[22%] absolute cursor-pointer"
          :to="{ name: 'believer', hash: '#send-workers-to-harvest' }"
        />
        <RouterLink
          class="inline-block h-[52%] w-[69%] absolute bottom-0 cursor-pointer"
          :to="{ name: 'believer', hash: '#send-workers-to-harvest' }"
        />
        <RouterLink
          class="inline-block h-full w-[28%] absolute right-0 cursor-pointer"
          :to="{ name: 'home', hash: '#taking-the-church' }"
        />
        <RouterLink
          class="inline-block h-[13%] w-[18%] absolute right-[28%] top-[20%] cursor-pointer"
          :to="{ name: 'seminary' }"
        />
        <RouterLink
          class="inline-block h-[13%] w-[17%] absolute left-[22%] top-[20%] cursor-pointer"
          :to="{ name: 'mission' }"
        />
        <div
          class="inline-block h-[13%] w-[10%] absolute left-[42%] top-[34%] cursor-pointer"
          @click="openDialog"
        ></div>
      </div>
      <img src="/c2w-center.webp" class="h-full object-cover" alt="" />
    </div>
  </div>
  <div class="background py-10">
    <div
      id="accordion-flush"
      class="container mx-auto max-w-4xl px-4 ff-normal"
    >
      <div
        v-for="(item, index) in accordionData"
        :key="index"
        class="mb-4 rounded-lg overflow-hidden bg-white border border-gray-200 transition-shadow hover:shadow-md"
      >
        <h2 :id="'accordion-flush-heading-' + index">
          <button
            type="button"
            class="flex items-center justify-between w-full font-medium rtl:text-right p-4 transition-colors duration-200"
            :class="{ 'bg-white hover:bg-gray-50': true }"
            @click="toggleAccordion(index)"
          >
            <div class="flex items-center gap-4">
              <div
                class="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm"
              >
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="w-full h-full object-cover"
                />
              </div>
              <span class="font-bold text-gray-800 text-lg">{{
                item.name
              }}</span>
            </div>
            <svg
              :class="{
                'rotate-180': activeAccordion === index,
                'text-gray-500': true,
              }"
              class="w-4 h-4 transition-transform duration-300 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          :id="'accordion-flush-body-' + index"
          v-show="activeAccordion === index"
          class="p-6 bg-gray-50 text-gray-600 border-t border-gray-100"
        >
          <p class="leading-relaxed">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
  <dialog ref="imageDialog" @click="handleDialogClick" class="relative">
    <div class="absolute top-4 right-4 flex gap-2">
      <button
        @click="closeDialog"
        class="bg-red-700 p-2 rounded-full text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    <img src="/FRUITS3-Make.jpg" style="height: 90%" />
  </dialog>
</template>
<style scoped>
dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
}
</style>
<script>
export default {
  data() {
    return {
      activeAccordion: null,
      accordionData: [
        {
          name: "WILLIAM LEONG",
          description:
            "William Leong is known for his contributions to community leadership and inspiring others through his work.",
          image:
            "https://ui-avatars.com/api/?name=William+Leong&background=eceff1&color=1f2937&size=200",
        },
        {
          name: "PASTOR BUDDY AGUNAT",
          description:
            "Pastor Buddy Agunat is a dedicated spiritual leader, known for his compassionate guidance and impactful sermons.",
          image:
            "https://ui-avatars.com/api/?name=Buddy+Agunat&background=eceff1&color=1f2937&size=200",
        },
        {
          name: "ELGIE AGUNAT",
          description:
            "Elgie Agunat is an advocate for community growth, bringing a unique perspective to local development projects.",
          image:
            "https://ui-avatars.com/api/?name=Elgie+Agunat&background=eceff1&color=1f2937&size=200",
        },
        {
          name: "PASTOR FALCON DELACRUZ",
          description:
            "Pastor Falcon Delacruz is celebrated for his dedication to faith-based initiatives and mentoring the next generation of leaders.",
          image:
            "https://ui-avatars.com/api/?name=Falcon+Delacruz&background=eceff1&color=1f2937&size=200",
        },
      ],
    };
  },
  methods: {
    toggleAccordion(index) {
      this.activeAccordion = this.activeAccordion === index ? null : index;
    },
    openDialog() {
      this.$refs.imageDialog.showModal();
    },
    closeDialog() {
      this.$refs.imageDialog.close();
    },
    handleDialogClick(event) {
      if (event.target === this.$refs.imageDialog) {
        this.closeDialog();
      }
    },
  },
};
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
.bg-white {
  background-color: white;
}
</style>
