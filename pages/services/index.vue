<template>
  <div class="my-6 mx-auto">
    <div class="flex flex-wrap gap-12 justify-center">
      <!-- Design -->
      <div
        class="w-[300px] h-[200px] bg-[url('/images/design/design1.jpg')] bg-cover rounded-lg"
      >
        <NuxtLink to="/services/design">
          <div
            class="w-full h-full flex items-center justify-center bg-black/80 hover:bg-black/60 transition-all duration-300 ease-in-out rounded-lg"
          >
            <p class="text-white text-[18px]">Design</p>
          </div>
        </NuxtLink>
      </div>
      <!-- Bangun -->
      <div
        class="w-[300px] h-[200px] bg-[url('/images/bangun/bangun2-1.png')] bg-cover rounded-lg"
      >
        <NuxtLink to="/services/bangun">
          <div
            class="w-full h-full flex items-center justify-center bg-black/80 hover:bg-black/60 transition-all duration-300 ease-in-out rounded-lg"
          >
            <p class="text-white text-[18px]">Bangun</p>
          </div>
        </NuxtLink>
      </div>
      <!-- Renovasi -->
      <div
        class="w-[300px] h-[200px] bg-[url('/images/renovasi/renovasi1.jpg')] bg-cover rounded-lg"
      >
        <NuxtLink to="/services/renovasi">
          <div
            class="w-full h-full flex items-center justify-center bg-black/80 hover:bg-black/60 transition-all duration-300 ease-in-out rounded-lg"
          >
            <p class="text-white text-[18px]">Renovasi</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script scope></script>

<style scoped></style>
