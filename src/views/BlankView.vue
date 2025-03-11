<template>
  <RouterLink to="" @click.prevent="$router.go(-1)">
    <Button
      class="ff-normal px-5 fixed m-4 z-10"
      severity="contrast"
      label="Back"
    ></Button>
  </RouterLink>
  <div class="grid place-items-center h-screen">
    <div class="text-4xl font-thin ff-normal"></div>
  </div>
</template>
