<template>
  <div
    class="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50 p-4 overflow-y-auto transition-all duration-300 ease-in-out"
    :class="'sm:items-center sm:justify-center'"
    style="max-height: 100dvh"
    @click.self="$emit('close')"
  >
    <div
      v-if="targetTag === 'discipleship-for-true-believers'"
      class="card-container responsive-modal"
      v-motion-slide-up
    >
      <div class="card-header">
        <div class="img-container">
          <img
            src="/FRUITS3-Make.jpg"
            alt="Discipleship for True Believers"
            class="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div class="header-text">
          <h2 class="title">Discipleship for True Believers</h2>
          <p class="scripture">Luke 14:26-27</p>
        </div>
      </div>
      <div class="content-container">
        <p class="headline">
          If anyone comes to me and does not hate father and mother, wife and
          children, brothers and sisters—yes, even their own life—such a person
          cannot be my disciple. And whoever does not carry their cross and
          follow me cannot be my disciple.
        </p>
      </div>
      <div class="button-container">
        <button
          class="btn-primary"
          @click="
            openModal(
              'https://docs.google.com/document/d/13LmLfFp4ugEN2ZXUbNS74hSgXbpWBWcRmXDAUK-MF4I/preview?embedded=true'
            )
          "
        >
          <span>Learn More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
        <button class="btn-secondary" @click="$emit('close')">Close</button>
      </div>
    </div>
    <div
      v-if="targetTag === 'share-with-the-needy'"
      class="card-container responsive-modal"
      v-motion-slide-up
    >
      <div class="card-header">
        <div class="img-container">
          <img
            src="/FRUITS3-Share.jpg"
            alt="Share with the Needy"
            class="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div class="header-text">
          <h2 class="title">Share with the Needy</h2>
          <p class="scripture">Mark 10:17,21</p>
        </div>
      </div>
      <div class="content-container">
        <p class="subtitle">What must I do to inherit eternal life?</p>
        <p class="description">
          Go, sell everything you have and give to the poor, and you will have
          treasure in heaven. Then come, follow me.
        </p>
      </div>
      <div class="button-container">
        <button
          class="btn-primary"
          @click="
            openModal(
              'https://docs.google.com/document/d/18sYT3YZJhE6lAtUB6Os2Yy_mCkmmCM9l/preview?embedded=true'
            )
          "
        >
          <span>Learn More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
        <button class="btn-secondary" @click="$emit('close')">Close</button>
      </div>
    </div>
    <div
      v-if="targetTag === 'send-workers-to-harvest'"
      class="card-container responsive-modal"
      v-motion-slide-up
    >
      <div class="card-header">
        <div class="img-container">
          <img
            src="/FRUITS3-Send.png"
            alt="Send Workers to Harvest"
            class="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div class="header-text">
          <h2 class="title">Send Workers to Harvest</h2>
          <p class="scripture">Luke 8:3, 10:2; Matthew 24:45</p>
        </div>
      </div>
      <div class="content-container">
        <p class="headline">
          We have workers waiting to be sent. You can be a worker or be a sender
          and share equally in the Lord's reward.
        </p>
      </div>
      <div class="button-container">
        <button
          class="btn-primary"
          @click="
            openModal(
              'https://docs.google.com/document/d/1mTqEYu1ml9aXz-7GyuS-iXmuKsjIAZen/preview?embedded=true'
            )
          "
        >
          <span>Learn More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
        <button class="btn-secondary" @click="$emit('close')">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  directives: {
    motionSlideUp: {
      mounted(el) {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
        setTimeout(() => {
          el.style.transition = "all 0.5s ease-out";
          el.style.opacity = 1;
          el.style.transform = "translateY(0)";
        }, 50);
      },
    },
  },
};
</script>

<style scoped>
.card-container {
  background-color: white;
  border-radius: 16px;
  padding: 2rem;
  width: 100%;
  max-width: 540px;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;
}
.responsive-modal {
  max-height: 90dvh;
  overflow-y: auto;
  overscroll-behavior: contain;
}
@media (max-width: 640px) {
  .card-container.responsive-modal {
    padding: 1rem;
    max-width: 98vw;
    max-height: 90dvh;
    min-height: unset;
    box-sizing: border-box;
  }
}
.card-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(to right, #dc2626, #ef4444, #f87171);
}
.card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  position: relative;
}
@media (min-width: 640px) {
  .card-header {
    flex-direction: row;
    align-items: center;
  }
}
.img-container {
  width: 140px;
  height: 140px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}
@media (min-width: 640px) {
  .img-container {
    width: 160px;
    height: 160px;
    margin-bottom: 0;
    margin-right: 1.5rem;
  }
}
.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.header-text {
  text-align: center;
}
@media (min-width: 640px) {
  .header-text {
    text-align: left;
  }
}
.title {
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.25rem;
  position: relative;
  display: inline-block;
}
.title::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 40px;
  height: 3px;
  background-color: #dc2626;
  border-radius: 2px;
}
@media (min-width: 640px) {
  .title {
    font-size: 2.25rem;
  }
}
.scripture {
  font-size: 1rem;
  color: #6b7280;
  font-style: italic;
}
.content-container {
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 12px;
}
.headline {
  font-family: "Caveat", cursive, sans-serif;
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 1.3;
  color: #dc2626;
  text-align: center;
  margin-bottom: 1rem;
}
@media (min-width: 640px) {
  .headline {
    font-size: 2.5rem;
  }
}
.subheadline {
  font-size: 1.75rem;
  font-weight: 700;
  color: #dc2626;
  text-align: center;
}
.subtitle {
  font-size: 1.25rem;
  font-weight: 700;
  color: #dc2626;
  text-align: center;
  margin-bottom: 0.75rem;
}
.description {
  font-size: 1.125rem;
  color: #4b5563;
  text-align: center;
  margin-bottom: 1rem;
  line-height: 1.6;
}
.button-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
}
@media (min-width: 640px) {
  .button-container {
    flex-direction: row;
    gap: 1rem;
  }
}
.btn-primary {
  background-color: #dc2626;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.25);
  position: relative;
  overflow: hidden;
}
.btn-primary::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}
.btn-primary:hover {
  background-color: #b91c1c;
  transform: translateY(-2px);
}
.btn-primary:hover::before {
  transform: translateX(100%);
}
.btn-secondary {
  background-color: #f3f4f6;
  color: #4b5563;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-align: center;
  width: 100%;
  border: 1px solid #e5e7eb;
}
.btn-secondary:hover {
  background-color: #e5e7eb;
  color: #1f2937;
}
@media (min-width: 640px) {
  .btn-primary,
  .btn-secondary {
    width: auto;
    min-width: 140px;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
