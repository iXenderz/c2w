<template>
  <RouterLink :to="{ name: 'home' }">
    <Button
      class="ff-normal px-5 fixed m-4 z-10"
      severity="contrast"
      label="Back"
    ></Button>
  </RouterLink>
  <img src="/c2w-center.jpg" class="h-screen w-screen" alt="" />
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
</template>
<style>
.background {
  background: radial-gradient(
    circle at 50% 50%,
    #f2f5ff,
    #f3f4f6,
    #eff2ff,
    #f3f4f6
  );
  position: relative;
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
