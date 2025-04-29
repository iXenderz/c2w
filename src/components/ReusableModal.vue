<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50"
    @click.self="$emit('close')"
    style="overflow-y: auto; max-height: 100dvh"
  >
    <div
      v-if="loading"
      class="absolute inset-0 flex items-center justify-center z-10"
    >
      <div class="loader"></div>
    </div>
    <div class="w-11/12 max-w-4xl p-4 relative responsive-modal">
      <iframe
        class="relative z-20"
        :src="url"
        width="100%"
        frameborder="0"
        style="height: 95vh; max-height: 90dvh"
        @load="loading = false"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loading: true, // Internal loading state
    };
  },
  watch: {
    url() {
      this.loading = true; // Reset loading state when URL changes
    },
  },
  mounted() {
    // Ensure loading is reset if iframe is already cached
    const iframe = this.$el.querySelector("iframe");
    if (iframe && iframe.complete) {
      this.loading = false;
    }
    document.body.style.overflow = "hidden"; // Disable scrolling on the body
  },
  beforeUnmount() {
    document.body.style.overflow = "auto"; // Re-enable scrolling on unmount
  },
};
</script>
<style scoped>
.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Responsive modal for mobile: allow vertical scroll and max height */
.responsive-modal {
  max-height: 90dvh;
  overflow-y: auto;
  overscroll-behavior: contain;
}

@media (max-width: 640px) {
  .responsive-modal {
    padding: 0.5rem;
    max-width: 99vw;
    max-height: 90dvh;
    min-height: unset;
    box-sizing: border-box;
  }
}
</style>
