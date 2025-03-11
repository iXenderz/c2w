<template>
  <div class="card py-16">
    <p
      class="text-gray-800 md:text-5xl text-3xl font-extrabold md:!leading-[55px] text-center mx-auto mb-2"
      style="max-width: 800px"
    >
      TAKING THE CHURCH TO THE PEOPLE
    </p>
    <p class="ff-normal text-center mb-3 mx-auto" style="max-width: 900px">
      For many people, attending a church is a challenge. They do not have
      transportation. They may feel socially uncomfortable among other people
      with whom they have nothing in common. There are a myriad of reasons for
      being separated from the gospel of Jesus Christ and the care and ministry
      of a body of Christ. Christ to the World seeks to take the love of God to
      this people.
    </p>
    <Carousel
      :value="missions"
      :numVisible="3"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
      :autoplayInterval="5000"
    >
      <template #item="{ data: mission }">
        <div class="p-4 sm:mb-0 mb-6">
          <div class="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              :src="`/${mission.img}`"
            />
          </div>
          <h2 class="text-2xl font-medium title-font text-gray-900 mt-5">
            {{ mission.title }}
          </h2>
          <p class="leading-relaxed ff-normal mt-2">
            {{ mission.description }}
          </p>
          <!-- <a class="text-red-500 inline-flex items-center ff-normal mt-3"
            >Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a> -->
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      missions: [
        {
          img: "friendship.jpg",
          title: "Friendship",
          description:
            "We value friendship as an important part of the Christian life. We believe that by building meaningful relationships with other believers, we can grow in our faith and become more effective disciples of Jesus Christ.",
        },
        {
          img: "prayers-for-needs.jpg",
          title: "Prayers for Needs",
          description:
            "We believe that prayer is a powerful tool that can help us connect with God and seek His guidance and help in times of need. We encourage our students to pray for their own needs as well as the needs of others.",
        },
        {
          img: "share-gospel.jpg",
          title: "Share Gospel",
          description:
            "Sharing the gospel is an important part of our mission. We believe that by sharing the good news of Jesus Christ, we can help others find hope, peace, and salvation.",
        },
        {
          img: "share-and-distribute-food-and-clothing.jpg",
          title: "Share and Distribute Food and Clothing",
          description:
            "We believe that it is important to show compassion and care for those in need. We encourage our students to share and distribute food and clothing to those who are less fortunate.",
        },
        {
          img: "conduct-communion-and-baptism.jpg",
          title: "Conduct Communion and Baptism",
          description:
            "Communion and baptism are important sacraments. They are a way to remember and celebrate the life, death, and resurrection of Jesus Christ.",
        },
      ],
      responsiveOptions: [
        {
          breakpoint: "1400px",
          numVisible: 2,
          numScroll: 1,
        },
        {
          breakpoint: "1199px",
          numVisible: 3,
          numScroll: 1,
        },
        {
          breakpoint: "767px",
          numVisible: 2,
          numScroll: 1,
        },
        {
          breakpoint: "575px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
    };
  },
};
</script>
