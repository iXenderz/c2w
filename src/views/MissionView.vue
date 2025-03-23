<template>
  <RouterLink :to="{ name: 'home' }">
    <Button
      class="ff-normal px-5 fixed m-4 z-10"
      severity="contrast"
      label="Back"
    ></Button>
  </RouterLink>
  <div
    style="
      width: 100vw;
      height: 100vh;
      background-image: url('GOD gave Mission.jpg');
      background-size: cover;
      background-position: center;
      position: relative;
    "
  >
    <div class="flex items-end h-full text-3xl">
      <div
        class="text-center ff-narrow w-1/2 h-[55vh] pe-10 opacity-95 flex flex-col gap-4"
      >
        <div class="text-blue-200">
          <RouterLink
            :to="{ name: 'church', hash: '#making-disciples' }"
            class="underline font-bold block"
            style="line-height: 0.8em"
            >Making Disciples
          </RouterLink>
          <span>Matt 28:19-20</span>
        </div>
        <div class="text-blue-600">
          <RouterLink
            :to="{ name: 'church', hash: '#share-with-the-needy' }"
            class="underline font-bold block"
            style="line-height: 0.8em"
            >Share With the Needy
          </RouterLink>
          <span>Acts 2:44</span>
        </div>
        <div class="text-blue-700">
          <RouterLink
            :to="{ name: 'church', hash: '#send-workers-to-harvest' }"
            class="underline font-bold block"
            style="line-height: 0.8em"
            >Send Workets to the Harvest
          </RouterLink>
          <span>Luke 10:2</span>
        </div>
        <div class="text-blue-800">
          <RouterLink
            :to="{ name: 'church', hash: '#establish-a-c2w-center' }"
            class="underline font-bold block"
            style="line-height: 0.8em"
            >Taking Your Church to the World
          </RouterLink>
          <span>Acts 2:44</span>
        </div>
      </div>
      <div
        class="text-center ff-narrow w-1/2 h-[55vh] ps-24 opacity-95 flex flex-col gap-4"
      >
        <div class="text-blue-200">
          <RouterLink
            :to="{
              name: 'believer',
              hash: '#discipleship-for-true-believers',
            }"
            class="underline font-bold block"
            style="line-height: 0.8em"
            >Making Disciples
          </RouterLink>
          <span>Matt 28:19-20</span>
        </div>
        <div class="text-slate-200">
          <RouterLink
            :to="{ name: 'believer', hash: '#share-with-the-needy' }"
            class="underline font-bold block"
            style="line-height: 0.8em"
            >Give to the Poor
          </RouterLink>
          <span>Mark 10:21</span>
        </div>
        <div class="text-slate-100">
          <RouterLink
            :to="{ name: 'believer', hash: '#send-workers-to-harvest' }"
            class="underline font-bold block"
            style="line-height: 0.8em"
            >Send Workers to the Harvest
          </RouterLink>
          <span>Luke 10:2</span>
        </div>
      </div>
    </div>
  </div>
</template>
