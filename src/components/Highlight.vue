<template>
  <section
    class="flex flex-col md:flex-row items-start gap-4 xs:gap-6 md:gap-8 w-full py-8 xs:py-10 md:py-12"
  >
    <div class="w-full md:w-1/2 mb-2 md:mb-0">
      <img
        :src="imgSrc"
        alt="_"
        class="rounded-lg shadow-lg w-full object-cover max-h-48 xs:max-h-64 md:max-h-none"
      />
    </div>
    <article :id="tagID" class="w-full ff-normal">
      <header class="mb-2 xs:mb-4">
        <button
          v-if="!isLink"
          class="font-bold text-2xl xs:text-3xl md:text-4xl underline"
          @click.prevent="openModal"
        >
          {{ title }}
        </button>
        <RouterLink
          v-else
          :to="{ name: 'blank' }"
          class="font-bold text-2xl xs:text-3xl md:text-4xl underline"
          >{{ title }}
        </RouterLink>
        <div
          class="text-base xs:text-lg md:text-xl italic flex flex-wrap gap-2 xs:gap-3"
        >
          <span class="whitespace-nowrap">{{ subtitle }}</span>
          <span
            v-if="quotes"
            class="text-lg xs:text-xl md:text-2xl font-semibold text-cyan-600"
          >
            <span v-for="(quote, i) in quotes" :key="i" class="inline-block">{{
              quote
            }}</span>
          </span>
        </div>
      </header>
      <div>
        <slot></slot>
      </div>
    </article>
  </section>
</template>
<script>
export default {
  props: {
    imgSrc: { type: String, required: true },
    tagID: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    quotes: { type: Array, required: false },
    isLink: { type: Boolean, default: false },
  },
  methods: {
    openModal() {
      this.$emit("on-open-modal");
    },
  },
};
</script>
