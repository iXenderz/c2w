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
      src="/FRUITS3 BELIEVER intro HEADER.jpg"
      style="width: 100%; height: 100vh"
      alt=""
    />
    <div
      class="flex flex-col items-center gap-16 container mx-auto py-16 max-w-4xl"
    >
      <Highlight
        imgSrc="/FRUITS3-Make.jpg"
        tagID="discipleship-for-true-believers"
        title="Discipleship for True Believers"
        subtitle="Luke 14:26-27"
        :quotes="['The theology: MY DISCIPLE']"
        @on-open-modal="
          openModal(
            'https://docs.google.com/document/d/13LmLfFp4ugEN2ZXUbNS74hSgXbpWBWcRmXDAUK-MF4I/preview?embedded=true'
          )
        "
      >
        <div class="text-2xl font-semibold text-red-700">
          26 "if anyone comes to me and <br />
          does not hate father and mother, <br />
          wife and children, brothers and sisters <br />
          —yes, even their own life—such a person <br />
          cannot be <b>my disciple</b>. <br />
          27 And whoever does not carry their cross <br />
          and follow me cannot be <b>my disciple</b>."
        </div>
      </Highlight>
      <Highlight
        imgSrc="/FRUITS3-Share.jpg"
        tagID="share-with-the-needy"
        title="Share with the Needy"
        subtitle="Mark 10:17,21"
        :quotes="[
          'The theology: Hallmark of a True Believer',
          'The theology: Explaining &quot;Go Sell...&quot;',
        ]"
        @on-open-modal="
          openModal(
            'https://docs.google.com/document/d/18sYT3YZJhE6lAtUB6Os2Yy_mCkmmCM9l/preview?embedded=true'
          )
        "
      >
        <div class="text-4xl mb-4 text-red-700 ff-vibes">
          What must I do to inherit eternal life?
        </div>
        <div class="text-2xl font-semibold text-red-700">
          "Go, sell everything you have <br />
          and give to the poor, <br />
          and you will have treasure in heaven. <br />
          Then come, follow me."
        </div>
      </Highlight>
      <Highlight
        imgSrc="/FRUITS3-Send.png"
        tagID="send-workers-to-harvest"
        title="Send Workers to Harvest"
        subtitle="Luke 8:3, 10:2 Matthew 24:45"
        :quotes="['The theology: Ministering to Jesus']"
        @on-open-modal="
          openModal(
            'https://docs.google.com/document/d/1mTqEYu1ml9aXz-7GyuS-iXmuKsjIAZen/preview?embedded=true'
          )
        "
      >
        <div class="text-4xl mb-4 text-red-700 ff-vibes">
          You ever wonder who "sent" Jesus <br />
          and His disciples into the Harvest?
        </div>
        <div class="text-2xl font-semibold text-red-700">
          We have workers waiting to be sent. <br />
          You can be a worker or be a sender. and share equally in the Lord's
          reward.
        </div>
      </Highlight>
    </div>
  </div>
  <ReusableModal
    v-if="showModal"
    :url="googleDocUrl"
    @close="showModal = false"
  />
  <BelieverModal
    v-if="showBelieverModal"
    @close="showBelieverModal = false"
    @open="openModal"
  />
</template>
<script>
export default {
  components: {
    Highlight,
  },
  data() {
    return {
      showModal: false,
      showBelieverModal: true,
      googleDocUrl: "",
    };
  },
  methods: {
    openModal(url) {
      this.showBelieverModal = false;
      this.showModal = true;
      this.googleDocUrl = url;
    },
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
</style>
