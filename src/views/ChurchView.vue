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
      src="/H-FRUITS3_Church.jpg"
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
            :to="{ name: 'blank' }"
            class="font-bold text-4xl underline"
            >Making Disciples</RouterLink
          >
          <div class="text-lg mb-2 italic">Matthew 20:19</div>
          <div class="text-2xl font-bold">A Seminary for Making Disciples</div>
          <div>
            Offer teaching and training in the words and works of Jesus. Be
            equipped as a disciple to serve the Lord and to make disciples
          </div>
          <div class="mt-2">
            <span class="font-bold uppercase text-lg">SEND</span>
            members to attend a 5-Day Intensive Discipleship Workshop at the
            Christ to the World Center
          </div>
          <div>Biliti San Fernando 1.5 hours north of Manila, Philippines</div>
          <div>All believers are invited - FREE to local Filipinos</div>
          <div>
            <span class="font-bold uppercase text-lg">SCHEDULE</span> A
            Discipleship Workshop in your church.
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
          <div class="text-lg mb-4 italic">Acts 10:1-4</div>
          <div class="text-2xl font-bold mb-3">The Cornelius Offering</div>
          <div class="mb-3">
            Christ to the World is giving to the needy as Cornelius the
            Centurion gave, which came up as a memorial offering before God.
          </div>
          <div>
            Every peso and dollar given to Christ to the World supports orphans
            and widows and distribution of food, clothing, and necessities in
            our gospel outreaches.
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
          <div class="text-lg mb-4 italic">Luke 10:2 Matthew 24:45</div>
          <div class="text-2xl mb-3 font-bold">The Worker and the Sender</div>
          <div class="mb-3">
            Christ to the World needs two types of disciples for the Harvest:
            Full-time Workers in the field and Senders to send and manage
            workers to the field.
          </div>
          <div>
            The Workers are local disciples taking the church to the local
            residents. The Senders are disciples supporting full-time workers
            with salaries, food, housing, resources to share with the needy.
          </div>
        </div>
      </div>
      <div class="flex items-start gap-8">
        <div class="w-1/2">
          <img
            src="/FRUITS3-Establish.jpg"
            alt="Placeholder"
            class="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
        <div class="w-full ff-normal">
          <RouterLink
            :to="{ name: 'blank' }"
            class="font-bold text-4xl underline"
            >Establish a C2W Center</RouterLink
          >
          <div class="text-lg mb-4 italic">Acts 13:47; Matthew 28:19</div>
          <div class="text-2xl font-bold mb-3">
            Mandate to take the Gospel to all nations.
          </div>
          <div>
            Disciples have a mandate to bring salvation to the ends of the
            earth. Any church or disciple can establish and support a Christ to
            the World Center in a foreign country, typically for $1000-2000 per
            month, depending on the country. Each C2W Center with one team of
            two can take the church to a minimum of 50-200 souls per week,
            amounting to 2500-10,000 per year.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  background: radial-gradient(
    circle at 50% 50%,
    #e0e7ff,
    #f3f4f6,
    #e0e7ff,
    #f3f4f6
  );
  min-height: 100vh;
  position: relative;
}
</style>
