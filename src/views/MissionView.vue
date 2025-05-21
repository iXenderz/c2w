<template>
  <!-- Fundraising Section -->

  <RouterLink :to="{ name: 'home' }">
    <Button
      class="ff-normal px-5 fixed m-4 z-10"
      severity="contrast"
      label="Back"
    ></Button>
  </RouterLink>
  <div class="grid place-items-center min-h-full background py-12">
    <div
      class="rounded-md shadow-lg"
      style="
        width: 800px;
        height: 533.17px;
        background-image: url('GOD gave Mission.jpg');
        background-size: cover;
        background-position: center;
        position: relative;
      "
    >
      <div class="flex items-end h-full">
        <div
          class="text-center ff-narrow w-1/2 h-[310px] pe-6 opacity-95 text-lg flex flex-col gap-4"
        >
          <div class="text-blue-200">
            <RouterLink
              :to="{ name: 'church', hash: '#making-disciples' }"
              class="underline font-bold block"
              style="line-height: 0.6em"
              >Making Disciples
            </RouterLink>
            <span>Matt 28:19-20</span>
          </div>
          <div class="text-blue-600">
            <RouterLink
              :to="{ name: 'church', hash: '#share-with-the-needy' }"
              class="underline font-bold block"
              style="line-height: 0.6em"
              >Share With the Needy
            </RouterLink>
            <span>Acts 2:44</span>
          </div>
          <div class="text-blue-700">
            <RouterLink
              :to="{ name: 'church', hash: '#send-workers-to-harvest' }"
              class="underline font-bold block"
              style="line-height: 0.6em"
              >Send Workers to the Harvest
            </RouterLink>
            <span>Luke 10:2</span>
          </div>
          <div class="text-blue-800">
            <RouterLink
              :to="{ name: 'church', hash: '#establish-a-c2w-center' }"
              class="underline font-bold block"
              style="line-height: 0.6em"
              >Taking Your Church to the World
            </RouterLink>
            <span>Acts 2:44</span>
          </div>
        </div>
        <div
          class="text-center ff-narrow w-1/2 h-[310px] ps-16 opacity-95 text-lg flex flex-col gap-4"
        >
          <div class="text-blue-200">
            <RouterLink
              :to="{
                name: 'believer',
                hash: '#discipleship-for-true-believers',
              }"
              class="underline font-bold block"
              style="line-height: 0.6em"
              >Making Disciples
            </RouterLink>
            <span>Matt 28:19-20</span>
          </div>
          <div class="text-slate-200">
            <RouterLink
              :to="{ name: 'believer', hash: '#share-with-the-needy' }"
              class="underline font-bold block"
              style="line-height: 0.6em"
              >Give to the Poor
            </RouterLink>
            <span>Mark 10:21</span>
          </div>
          <div class="text-slate-100">
            <RouterLink
              :to="{ name: 'believer', hash: '#send-workers-to-harvest' }"
              class="underline font-bold block"
              style="line-height: 0.6em"
              >Send Workers to the Harvest
            </RouterLink>
            <span>Luke 10:2</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center my-10 ff-normal">
      <div
        class="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-wide mb-2"
      >
        WANTED:
        <span class="font-fancy text-green-700 font-bold"
          >RICH BELIEVERS <span class="font-thin">to</span> SEND WORKERS</span
        >
        <span class="text-green-800 font-thin mx-2">into the</span>
        <span class="font-fancy text-green-700 font-bold">HARVEST FIELD</span>
      </div>
      <div class="text-center mt-2 mb-4">
        <div class="text-red-600 italic text-lg md:text-xl font-semibold">
          “The harvest is plentiful, but the workers are few.<br />
          Ask the Lord of the harvest, therefore, to send out workers into his
          harvest field.”
        </div>
        <div class="text-gray-700 font-medium mt-1 text-base md:text-lg">
          Matthew 9:35-38
        </div>
      </div>
      <div
        class="bg-white/90 border border-gray-300 rounded-lg shadow-lg px-8 py-6 max-w-2xl text-center"
      >
        <div class="text-blue-900 font-extrabold text-xl mb-1">
          Christ to the World
          <span class="font-bold mx-2">FUND RAISING GOAL:</span>
          <span class="text-green-600 text-2xl font-extrabold">$46,000</span>
        </div>
        <div class="text-gray-800 mt-2 text-base md:text-lg">
          For a <span class="font-bold">ONE YEAR</span> budget for sending 3
          teams of pastors-disciples<br />
          to reach the equivalence of 3 churches totaling 60 families of about
          120 to 300 souls.
        </div>
      </div>
    </div>
  </div>
</template>
