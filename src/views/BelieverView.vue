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
      <div class="flex items-start gap-8 w-full">
        <div class="w-1/2">
          <img
            src="/FRUITS3-Make.jpg"
            alt="Placeholder"
            class="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
        <div id="discipleship-for-true-believers" class="w-full ff-normal">
          <button
            class="font-bold text-4xl underline"
            @click="
              () =>
                openModal(
                  `https://docs.google.com/document/d/13LmLfFp4ugEN2ZXUbNS74hSgXbpWBWcRmXDAUK-MF4I/preview?embedded=true`
                )
            "
          >
            Discipleship for True Believers
          </button>
          <div class="text-lg mb-2 italic">Luke 14:26-27</div>
          <div class="text-2xl font-semibold text-red-700">
            26 "if anyone comes to me and <br />
            does not hate father and mother, <br />
            wife and children, brothers and sisters <br />
            —yes, even their own life—such a person <br />
            cannot be my disciple. <br />
            27 And whoever does not carry their cross <br />
            and follow me cannot be my disciple."
          </div>
        </div>
      </div>
      <div class="flex items-start gap-8 w-full">
        <div class="w-1/2">
          <img
            src="/FRUITS3-Share.jpg"
            alt="Placeholder"
            class="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
        <div id="share-with-the-needy" class="w-full ff-normal">
          <button
            class="font-bold text-4xl underline"
            @click="
              () =>
                openModal(
                  `https://docs.google.com/document/d/18sYT3YZJhE6lAtUB6Os2Yy_mCkmmCM9l/preview?embedded=true`
                )
            "
          >
            Share with the Needy
          </button>
          <div class="text-lg mb-4 italic">Mark 10:17,21</div>
          <div class="text-4xl mb-4 text-red-700 ff-vibes">
            What must I do to inherit eternal life?
          </div>
          <div class="text-2xl font-semibold text-red-700">
            "Go, sell everything you have <br />
            and give to the poor, <br />
            and you will have treasure in heaven. <br />
            Then come, follow me."
          </div>
        </div>
      </div>
      <div class="flex items-start gap-8 w-full">
        <div class="w-1/2">
          <img
            src="/FRUITS3-Send.png"
            alt="Placeholder"
            class="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
        <div id="send-workers-to-harvest" class="w-full ff-normal">
          <button
            class="font-bold text-4xl underline"
            @click="
              () =>
                openModal(
                  `https://docs.google.com/document/d/1mTqEYu1ml9aXz-7GyuS-iXmuKsjIAZen/preview?embedded=true`
                )
            "
          >
            Send Workers to Harvest
          </button>
          <div class="text-lg mb-4 italic">Luke 8:3, 10:2 Matthew 24:45</div>
          <div class="text-4xl mb-4 text-red-700 ff-vibes">
            You ever wonder who "sent" Jesus <br />
            and His disciples into the Harvest?
          </div>
          <div class="text-2xl font-semibold text-red-700">
            We have workers waiting to be sent. <br />
            You can be a worker or be a sender. and share equally in the Lord's
            reward.
          </div>
        </div>
      </div>
    </div>
  </div>
  <ReusableModal
    v-if="showModal"
    :url="googleDocUrl"
    @close="showModal = false"
  />
</template>
<script>
export default {
  data() {
    return {
      showModal: false,
      googleDocUrl: "",
    };
  },
  methods: {
    openModal(url) {
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
