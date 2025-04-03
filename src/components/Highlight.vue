<template>
  <section class="flex items-start gap-8 w-full">
    <div class="w-1/2">
      <img
        :src="imgSrc"
        alt="_"
        class="rounded-lg shadow-lg w-full object-cover"
      />
    </div>
    <article :id="tagID" class="w-full ff-normal">
      <header class="mb-4">
        <button
          v-if="!isLink"
          class="font-bold text-4xl underline"
          @click.prevent="openModal"
        >
          {{ title }}
        </button>
        <RouterLink
          v-else
          :to="{ name: 'blank' }"
          class="font-bold text-4xl underline"
          >{{ title }}
        </RouterLink>
        <div class="text-lg italic flex gap-3">
          <span class="whitespace-nowrap">{{ subtitle }}</span>
          <span v-if="quotes" class="text-xl font-semibold text-cyan-600">
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
