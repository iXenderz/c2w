<template>
  <RouterLink :to="{ name: 'home' }">
    <Button
      class="ff-normal fixed m-2 z-10 top-2 left-2 px-3 py-1 md:top-4 md:left-4 md:px-5 md:py-2 md:text-lg text-base"
      severity="contrast"
      label="Back"
    ></Button>
  </RouterLink>
  <div class="background relative">
    <img
      src="/FRUITS3 CHURCH intro HEADER.jpg"
      class="w-full h-[28vh] xs:h-[36vh] sm:h-[40vh] md:h-[100vh] object-cover object-center"
      alt=""
    />
    <div
      class="flex flex-col items-center gap-6 xs:gap-8 md:gap-16 container mx-auto py-4 xs:py-6 md:py-16 max-w-full md:max-w-4xl px-1 xs:px-2 md:px-0"
    >
      <Highlight
        imgSrc="/FRUITS3-Make.jpg"
        tagID="making-disciples"
        title="Making Disciples"
        subtitle="Matthew 28:19"
        @on-open-modal="
          openModal(
            'https://docs.google.com/document/d/13LmLfFp4ugEN2ZXUbNS74hSgXbpWBWcRmXDAUK-MF4I/preview?embedded=true'
          )
        "
        class="px-16 md:px-0"
      >
        <p
          class="text-4xl xs:text-5xl md:text-2xl mb-1 xs:mb-2 md:mb-4 text-red-700 ff-caveat text-left"
        >
          Is your church <br />
          making disciples?
        </p>
        <p
          class="text-2xl xs:text-3xl md:text-xl ml-0 md:ml-14 mt-1 md:mt-2 font-bold text-red-700 text-left"
        >
          We can help!
        </p>
      </Highlight>
      <Highlight
        imgSrc="/FRUITS3-Share.jpg"
        tagID="share-with-the-needy"
        title="Share with the Needy"
        subtitle="Acts 10:1-4"
        @on-open-modal="
          openModal(
            'https://docs.google.com/document/d/18sYT3YZJhE6lAtUB6Os2Yy_mCkmmCM9l/preview?embedded=true'
          )
        "
        class="px-16 md:px-0"
      >
        <p
          class="text-xl xs:text-2xl md:text-xl font-bold text-red-700 mb-1 text-left"
        >
          The Cornelius Offering
        </p>
        <p
          class="mb-1 xs:mb-2 md:mb-6 text-xl xs:text-2xl md:text-xl text-red-800 text-left"
        >
          Giving to the needy as Cornelius the Centurion gave
          <br class="hidden md:block" />
          was a memorial offering to God
        </p>
        <p
          class="text-3xl xs:text-4xl md:text-2xl text-red-700 ff-caveat text-left"
        >
          This is worship in Spirit and in Truth
        </p>
      </Highlight>
      <Highlight
        imgSrc="/FRUITS3-Send.png"
        tagID="send-workers-to-harvest"
        title="Send Workers to Harvest"
        subtitle="Luke 10:2 Matthew 24:45"
        :isLink="true"
        @on-open-modal="
          openModal(
            'https://docs.google.com/document/d/your-document-id/preview?embedded=true'
          )
        "
        class="px-16 md:px-0"
      >
        <p
          class="text-3xl xs:text-4xl md:text-2xl text-red-700 ff-caveat text-left"
        >
          You can send two full-time workers <br />
          into the harvest field to reach <br />
          260 families a year with the Gospel <br />
          without leaving your home!
        </p>
      </Highlight>
      <Highlight
        imgSrc="/FRUITS3-Establish.jpg"
        tagID="establish-a-c2w-center"
        title="Establish a C2W Center"
        subtitle="Acts 13:47; Matthew 28:19"
        :isLink="true"
        @on-open-modal="
          openModal(
            'https://docs.google.com/document/d/your-document-id/preview?embedded=true'
          )
        "
        class="px-16 md:px-0"
      >
        <p
          class="text-3xl xs:text-4xl md:text-2xl text-red-700 ff-caveat mb-1 xs:mb-2 md:mb-3 text-left"
        >
          You can proclaim the Gospel in <br />
          a developing country by establishing <br />
          a Christ to the World Mission Center <br />
          with only your heart and money.
        </p>
        <p class="text-red-700 text-lg xs:text-xl md:text-base text-left">
          <b>Take the church to the world</b>
        </p>
      </Highlight>
    </div>
  </div>
  <ReusableModal
    v-if="showModal"
    :url="googleDocUrl"
    @close="showModal = false"
  />
  <ChurchModal
    v-if="showChurchModal"
    @close="showChurchModal = false"
    @open="openModal"
  />
</template>
<script>
export default {
  data() {
    return {
      showModal: false,
      showChurchModal: true,
      googleDocUrl: "",
    };
  },
  methods: {
    openModal(url) {
      this.showChurchModal = false;
      this.showModal = true;
      this.googleDocUrl = url;
    },
  },
};
</script>
