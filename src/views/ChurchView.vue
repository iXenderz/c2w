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
            :to="{ name: 'seminary', query: { id: 'church' } }"
            class="font-bold text-4xl underline"
            >Making Disciples</RouterLink
          >
          <div class="text-lg mb-4 italic">Matthew 28:19</div>
          <div class="text-7xl mb-4 text-red-700 ff-caveat">
            Is your church <br />
            making disciples?
          </div>
          <div class="text-4xl ml-14 mt-2 font-bold text-red-700">
            We can help!
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
          <div class="text-2xl font-bold text-red-700 mb-1">
            The Cornelius Offering
          </div>
          <div class="mb-6 text-2xl text-red-800">
            Giving to the needy as Cornelius the Centurion gave <br />
            was a memorial offering to God
          </div>
          <div class="text-5xl text-red-700 ff-caveat">
            This is worship in Spirit and in Truth
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
        <div class="w-full ff-normal">
          <RouterLink
            :to="{ name: 'blank' }"
            class="font-bold text-4xl underline"
            >Send Workers to Harvest</RouterLink
          >
          <div class="text-lg mb-8 italic">Luke 10:2 Matthew 24:45</div>
          <div class="text-4xl text-red-700 ff-caveat">
            You can send two full-time workers <br />
            to the harvest field to reach <br />
            the Lord260 families a year with the Gospel <br />
            without leaving your home!
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
          <div class="text-lg mb-6 italic">Acts 13:47; Matthew 28:19</div>
          <div class="text-4xl text-red-700 ff-caveat">
            You can proclaim the Gospel in <br />
            a developing country by establishing <br />
            a Christ to the World Mission Center <br />
            with only your heart and money.
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
