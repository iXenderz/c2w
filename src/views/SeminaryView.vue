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
      />
      <input
        id="article-02"
        type="radio"
        name="slider"
        class="sr-only peer/02"
        checked
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
            aria-label="Open dialog"
            class="ff-normal absolute m-4 end-0 top-0 border-none"
            style="background-color: #0000008a"
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
            aria-label="Open dialog"
            class="ff-normal absolute m-4 end-0 top-0 border-none"
            style="background-color: #0000008a"
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
            aria-label="Open dialog"
            class="ff-normal absolute m-4 end-0 top-0 border-none"
            style="background-color: #0000008a"
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
  <dialog ref="imageDialog" @click="handleDialogClick">
    <img :src="dialogImage" alt="Zoomed Image" style="height: 180%" />
  </dialog>
</template>
<script>
export default {
  data() {
    return {
      dialogImage: "/C2W SEMINARY.jpg",
    };
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
  },
};
</script>
<style scoped>
/* Optional: Style the dialog element */
dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
