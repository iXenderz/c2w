<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex items-center justify-center z-50"
    @click.self="$emit('close')"
  >
    <div class="card-container">
      <Highlight
        v-if="targetTag === 'discipleship-for-true-believers'"
        imgSrc="/FRUITS3-Make.jpg"
        tagID="discipleship-for-true-believers"
        title="Discipleship for True Believers"
        subtitle="Luke 14:26-27"
        @on-open-modal="
          openModal(
            'https://docs.google.com/document/d/13LmLfFp4ugEN2ZXUbNS74hSgXbpWBWcRmXDAUK-MF4I/preview?embedded=true'
          )
        "
      >
        <p class="text-2xl font-semibold text-red-700">
          26 "if anyone comes to me and <br />
          does not hate father and mother, <br />
          wife and children, brothers and sisters <br />
          —yes, even their own life—such a person <br />
          cannot be my disciple. <br />
          27 And whoever does not carry their cross <br />
          and follow me cannot be my disciple."
        </p>
      </Highlight>
      <Highlight
        v-if="targetTag === 'share-with-the-needy'"
        imgSrc="/FRUITS3-Share.jpg"
        tagID="share-with-the-needy"
        title="Share with the Needy"
        subtitle="Mark 10:17,21"
        @on-open-modal="
          openModal(
            'https://docs.google.com/document/d/18sYT3YZJhE6lAtUB6Os2Yy_mCkmmCM9l/preview?embedded=true'
          )
        "
      >
        <p class="text-4xl mb-4 text-red-700 ff-vibes">
          What must I do to inherit eternal life?
        </p>
        <p class="text-2xl font-semibold text-red-700">
          "Go, sell everything you have <br />
          and give to the poor, <br />
          and you will have treasure in heaven. <br />
          Then come, follow me."
        </p>
      </Highlight>
      <Highlight
        v-if="targetTag === 'send-workers-to-harvest'"
        imgSrc="/FRUITS3-Send.png"
        tagID="send-workers-to-harvest"
        title="Send Workers to Harvest"
        subtitle="Luke 8:3, 10:2 Matthew 24:45"
        @on-open-modal="
          openModal(
            'https://docs.google.com/document/d/1mTqEYu1ml9aXz-7GyuS-iXmuKsjIAZen/preview?embedded=true'
          )
        "
      >
        <p class="text-4xl mb-4 text-red-700 ff-vibes">
          You ever wonder who "sent" Jesus <br />
          and His disciples into the Harvest?
        </p>
        <p class="text-2xl font-semibold text-red-700">
          We have workers waiting to be sent. <br />
          You can be a worker or be a sender. and share equally in the Lord's
          reward.
        </p>
      </Highlight>
    </div>
  </div>
</template>
<script>
import Highlight from "../components/Highlight.vue";
export default {
  components: {
    Highlight,
  },
  data() {
    return {
      tags: [
        "discipleship-for-true-believers",
        "share-with-the-needy",
        "send-workers-to-harvest",
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
