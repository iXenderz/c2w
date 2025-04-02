<template>
  <RouterLink :to="{ name: 'home' }">
    <Button
      class="ff-normal px-5 fixed m-4 z-10"
      severity="contrast"
      label="Back"
    ></Button>
  </RouterLink>
  <div class="background">
    <img
      src="/FRUITS3 CHURCH intro HEADER.jpg"
      style="width: 100%; height: 100vh"
      alt=""
    />
    <div
      class="flex flex-col items-center gap-16 container mx-auto py-16 max-w-4xl"
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
      >
        <p class="text-7xl mb-4 text-red-700 ff-caveat">
          Is your church <br />
          making disciples?
        </p>
        <p class="text-4xl ml-14 mt-2 font-bold text-red-700">We can help!</p>
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
      >
        <p class="text-2xl font-bold text-red-700 mb-1">
          The Cornelius Offering
        </p>
        <p class="mb-6 text-2xl text-red-800">
          Giving to the needy as Cornelius the Centurion gave <br />
          was a memorial offering to God
        </p>
        <p class="text-5xl text-red-700 ff-caveat">
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
      >
        <p class="text-4xl text-red-700 ff-caveat">
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
      >
        <p class="text-4xl text-red-700 ff-caveat mb-3">
          You can proclaim the Gospel in <br />
          a developing country by establishing <br />
          a Christ to the World Mission Center <br />
          with only your heart and money.
        </p>
        <p class="text-red-700 text-xl">
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
