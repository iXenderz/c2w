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
          <img src="/C2W SEMINARY Believer.jpg" alt="" style="height: 95vh" />
        </article>
      </div>
    </div>
  </section>
</template>
<script></script>
