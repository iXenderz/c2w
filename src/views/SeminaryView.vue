<template>
  <RouterLink :to="{ name: 'home' }">
    <Button
      class="ff-normal px-5 fixed m-4"
      severity="contrast"
      label="Back"
    ></Button>
  </RouterLink>
  <section class="background grid place-items-center">
    <div class="mx-auto relative">
      <input
        id="article-01"
        type="radio"
        name="slider"
        class="sr-only peer/01"
        checked
      />
      <input
        id="article-02"
        type="radio"
        name="slider"
        class="sr-only peer/02"
      />
      <input
        id="article-03"
        type="radio"
        name="slider"
        class="sr-only peer/03"
      />

      <div
        class="absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] peer-focus-visible/01:[&_article]:ring peer-focus-visible/01:[&_article]:ring-indigo-300 peer-checked/01:relative peer-checked/01:z-50 peer-checked/01:translate-x-0 peer-checked/01:scale-100 peer-checked/01:[&>label]:pointer-events-none peer-checked/02:-translate-x-40 peer-checked/02:scale-[83.75%] peer-checked/02:z-40 peer-checked/03:-translate-x-80 peer-checked/03:z-30"
      >
        <label class="absolute inset-0" for="article-01"
          ><span class="sr-only">...</span></label
        >
        <article class="bg-white rounded-lg shadow-2xl">
          <Button
            id="seminary-btn"
            aria-label="Open dialog"
            class="ff-normal absolute m-4 end-0 top-0 border-none bg-red-700"
            @click="openDialog('/C2W SEMINARY.jpg')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path
                d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34 6.5 6.5 0 0 0-6.5-6.5 6.5 6.5 0 0 0-6.5 6.5 6.5 6.5 0 0 0 6.5 6.5 6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25a1 1 0 0 0 1.41-1.41L15.5 14zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"
              />
            </svg>
          </Button>
          <img src="/C2W SEMINARY.jpg" style="height: 95vh" alt="" />
        </article>
      </div>

      <div
        class="absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] peer-focus-visible/02:[&_article]:ring peer-focus-visible/02:[&_article]:ring-indigo-300 peer-checked/01:translate-x-40 peer-checked/01:scale-[83.75%] peer-checked/01:z-40 peer-checked/02:relative peer-checked/02:z-50 peer-checked/02:translate-x-0 peer-checked/02:scale-100 peer-checked/02:[&>label]:pointer-events-none peer-checked/03:-translate-x-40 peer-checked/03:scale-[83.75%] peer-checked/03:z-40"
      >
        <label class="absolute inset-0" for="article-02"
          ><span class="sr-only">...</span></label
        >
        <article class="bg-white rounded-lg shadow-2xl">
          <Button
            id="church-btn"
            aria-label="Open dialog"
            class="ff-normal absolute m-4 end-0 top-0 border-none bg-red-700"
            @click="openDialog('/C2W SEMINARY Church.jpg')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path
                d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34 6.5 6.5 0 0 0-6.5-6.5 6.5 6.5 0 0 0-6.5 6.5 6.5 6.5 0 0 0 6.5 6.5 6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25a1 1 0 0 0 1.41-1.41L15.5 14zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"
              />
            </svg>
          </Button>
          <img src="/C2W SEMINARY Church.jpg" style="height: 95vh" alt="" />
        </article>
      </div>

      <div
        class="absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] peer-focus-visible/03:[&_article]:ring peer-focus-visible/03:[&_article]:ring-indigo-300 peer-checked/01:translate-x-80 peer-checked/01:z-30 peer-checked/02:translate-x-40 peer-checked/02:scale-[83.75%] peer-checked/02:z-40 peer-checked/03:relative peer-checked/03:z-50 peer-checked/03:translate-x-0 peer-checked/03:scale-100 peer-checked/03:[&>label]:pointer-events-none"
      >
        <label class="absolute inset-0" for="article-03"
          ><span class="sr-only">...</span></label
        >
        <article class="bg-white rounded-lg shadow-2xl">
          <Button
            id="believer-btn"
            aria-label="Open dialog"
            class="ff-normal absolute m-4 end-0 top-0 border-none bg-red-700"
            @click="openDialog('/C2W SEMINARY Believer.jpg')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path
                d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34 6.5 6.5 0 0 0-6.5-6.5 6.5 6.5 0 0 0-6.5 6.5 6.5 6.5 0 0 0 6.5 6.5 6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25a1 1 0 0 0 1.41-1.41L15.5 14zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"
              />
            </svg>
          </Button>
          <img src="/C2W SEMINARY Believer.jpg" alt="" style="height: 95vh" />
        </article>
      </div>
    </div>
  </section>
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
    <button
      @click="prevImage"
      class="fixed left-8 top-1/2 -translate-y-1/2 bg-red-700 p-2 rounded-full text-white"
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
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
    <transition :name="slideDirection" mode="out-in">
      <img
        :key="dialogImage"
        :src="dialogImage"
        alt="Zoomed Image"
        style="height: 150%"
      />
    </transition>
    <button
      @click="nextImage"
      class="fixed right-8 top-1/2 -translate-y-1/2 bg-red-700 p-2 rounded-full text-white"
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
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
  </dialog>
</template>
<script>
export default {
  data() {
    return {
      dialogImage: "/C2W SEMINARY.jpg",
      images: [
        "/C2W SEMINARY.jpg",
        "/C2W SEMINARY Church.jpg",
        "/C2W SEMINARY Believer.jpg",
      ],
      currentImageIndex: 0,
      slideDirection: "slide-right",
    };
  },
  mounted() {
    const id = this.$route.query.id;

    if (id) {
      const button = document.getElementById(`${id}-btn`);
      if (button) {
        button.click();
      } else {
        console.warn(`Not found`);
      }
    }
  },
  methods: {
    openDialog(imageSrc) {
      // Update the dialog image based on the clicked article.
      this.dialogImage = imageSrc;
      // Use $refs for better Vue integration.
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
    prevImage() {
      this.slideDirection = "slide-right";
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.images.length) % this.images.length;
      this.dialogImage = this.images[this.currentImageIndex];
    },
    nextImage() {
      this.slideDirection = "slide-left";
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.images.length;
      this.dialogImage = this.images[this.currentImageIndex];
    },
  },
};
</script>
<style scoped>
/* Optional: Style the dialog element */
dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}

.slide-left-enter-from {
  transform: translateX(100%);
}
.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-right-enter-from {
  transform: translateX(-100%);
}
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
