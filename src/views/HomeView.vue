<template>
  <Hero />
  <div class="container mx-auto pt-12 px-3">
    <div
      style="
        width: 800px;
        margin: 0 auto;
        border-radius: 5px;
        height: 533.17px;
        background-image: url('GOD gave Mission.jpg');
        background-size: cover;
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
              >Send Workets to the Harvest
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
  </div>
  <Caroucel />
  <FooterBar />
</template>
