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
      <div class="flex items-start gap-8">
        <div class="w-1/2">
          <img
            src="/FRUITS3-Make.jpg"
            alt="Placeholder"
            class="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
        <div class="w-full ff-normal">
          <RouterLink
            :to="{ name: 'seminary', query: { id: 'believer' } }"
            class="font-bold text-4xl underline"
            >Discipleship for True Believers</RouterLink
          >
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
      <div class="flex items-start gap-8">
        <div class="w-1/2">
          <img
            src="/FRUITS3-Share.jpg"
            alt="Placeholder"
            class="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
        <div class="w-full ff-normal">
          <RouterLink
            :to="{ name: 'blank' }"
            class="font-bold text-4xl underline"
            >Share with the Needy</RouterLink
          >
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
      <div class="flex items-start gap-8">
        <div class="w-1/2">
          <img
            src="/FRUITS3-Send.png"
            alt="Placeholder"
            class="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
        <div class="w-full ff-normal">
          <RouterLink
            :to="{ name: 'blank' }"
            class="font-bold text-4xl underline"
            >Send Workers to Harvest</RouterLink
          >
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
</template>
