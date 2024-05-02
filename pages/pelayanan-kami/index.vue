<template>
  <div class="my-6 flex flex-col gap-[48px]">
    <article
      class="w-full px-[12px] font-semibold text-[22px] md:text-[30px] lg:text-[35px] flex justify-center"
    >
      <div class="w-fit border-b-[3px] border-60-3 text-center">
        Pelayanan Kami
      </div>
    </article>
    <!-- Section to child route -->
    <div class="mx-auto flex flex-wrap gap-[48px] justify-center">
      <!-- Design -->
      <div
        class="w-[300px] h-[200px] bg-[url('/images/design/design1.jpg')] bg-cover rounded-lg"
      >
        <NuxtLink to="/pelayanan-kami/design">
          <div
            class="w-full h-full flex items-center justify-center bg-black/60 lg:bg-black/80 lg:hover:bg-black/60 transition-all duration-300 ease-in-out rounded-lg"
          >
            <p class="text-white text-[18px]">Design</p>
          </div>
        </NuxtLink>
      </div>
      <!-- Bangun -->
      <div
        class="w-[300px] h-[200px] bg-[url('/images/bangun/bangun2-1.png')] bg-cover rounded-lg"
      >
        <NuxtLink to="/pelayanan-kami/bangun">
          <div
            class="w-full h-full flex items-center justify-center bg-black/60 lg:bg-black/80 lg:hover:bg-black/60 transition-all duration-300 ease-in-out rounded-lg"
          >
            <p class="text-white text-[18px]">Bangun</p>
          </div>
        </NuxtLink>
      </div>
      <!-- Renovasi -->
      <div
        class="w-[300px] h-[200px] bg-[url('/images/renovasi/renovasi1.jpg')] bg-cover rounded-lg"
      >
        <NuxtLink to="/pelayanan-kami/renovasi">
          <div
            class="w-full h-full flex items-center justify-center bg-black/60 lg:bg-black/80 lg:hover:bg-black/60 transition-all duration-300 ease-in-out rounded-lg"
          >
            <p class="text-white text-[18px]">Renovasi</p>
          </div>
        </NuxtLink>
      </div>
    </div>
    <!-- Portofolio -->
    <div class="w-full h-full flex flex-col items-center gap-[24px]">
      <!-- Title -->
      <article
        class="border-b-[3px] border-60-3 w-fit px-[12px] font-semibold text-[22px] md:text-[35px]"
      >
        Portofolio
      </article>
      <article class="flex flex-wrap justify-center mx-auto">
        <img
          loading="lazy"
          v-for="item in items"
          :key="item"
          :src="item"
          alt="portofolio"
          class="w-[360px] h-[270px] object-cover transition-all duration-300 ease-in-out hover:scale-105 hover:rounded-md hover:z-10"
        />
      </article>
    </div>
  </div>
</template>

<script setup>
const items = [
  "/images/bangun/Bangun1.png",
  "/images/bangun/Bangun2.png",
  "/images/bangun/Bangun3.png",
  "/images/bangun/Bangun1.png",
  "/images/bangun/Bangun2.png",
  "/images/bangun/Bangun3.png",
  "/images/bangun/Bangun1.png",
  "/images/bangun/Bangun2.png",
  "/images/bangun/Bangun3.png",
];
</script>

<style scoped></style>
