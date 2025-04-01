<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex items-center justify-center z-50"
    @click.self="$emit('close')"
  >
    <div class="card-container">
      <Highlight
        v-if="targetTag === 'making-disciples'"
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
        v-if="targetTag === 'share-with-the-needy'"
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
        v-if="targetTag === 'send-workers-to-harvest'"
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
        v-if="targetTag === 'establish-a-c2w-center'"
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
</template>
<script>
export default {
  data() {
    return {
      tags: [
        "making-disciples",
        "share-with-the-needy",
        "send-workers-to-harvest",
        "establish-a-c2w-center",
      ],
      targetTag: "",
    };
  },
  mounted() {
    document.body.style.overflow = "hidden";
    const hash = this.$route.hash.substring(1);
    if (this.tags.includes(hash)) {
      this.targetTag = hash;
    } else {
      this.$emit("close");
    }
    this.$router.replace({ hash: "" });
  },
  beforeUnmount() {
    document.body.style.overflow = "auto";
  },
  methods: {
    openModal(url) {
      this.$emit("open", url);
    },
  },
};
</script>
<style scoped>
.card-container {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  margin: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 1024px;
  width: 100%;
}
</style>
