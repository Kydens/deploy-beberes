<template>
  <div class="w-full h-full bg-[#fffffa]">
    <section
      id="deskripsi"
      class="flex flex-col items-center gap-[24px] px-[49px] py-[32px] md:px-[88px] md:py-[64px] lg:px-[102px] lg:py-[64px]"
    >
      <!-- Title -->
      <article
        class="w-full px-[12px] font-semibold text-[22px] md:text-[30px] lg:text-[35px] flex justify-center"
      >
        <div
          class="w-fit h-fit bg-60-1 px-[24px] py-[8px] text-center rounded-xl"
        >
          Bangun
        </div>
      </article>

      <div class="flex flex-col gap-[24px] md:flex-row">
        <!-- Carousel -->
        <article class="w-full md:w-1/2 md:px-0">
          <UCarousel
            ref="carouselRef"
            v-slot="{ item }"
            :items="items"
            :ui="{ item: 'basis-full' }"
            class="overflow-hidden rounded-lg shadow-[0_0_6px_0_rgba(0,0,0,0.3)]"
          >
<<<<<<< HEAD
            <NuxtImg
              loading="lazy"
=======
            <img
>>>>>>> 65306b518abd7764ee42d3d828ce751a831d08a2
              :src="item"
              class="w-full h-[200px] md:h-[280px] xl:h-[380px] object-cover"
              draggable="false"
            />
          </UCarousel>
        </article>

        <!-- Describes -->
        <article class="w-full md:w-1/2 gap-[24px] flex flex-col">
          <!-- About Us -->
          <div class="about">
            <p class="m-0 text-justify text-[14px] md:text-[18px]">
              Penyediaan Jasa Design Arsitektur dan Interior yang menyesuaikan
              keinginan pelanggan. Kami selalu memberikan hasil design dari
              tenaga ahli yang pengalaman berkualitas dan profesional dengan
              berbagai tema design modern, minimalis, industrial klasik, hingga
              tradisional.
            </p>
          </div>
        </article>
      </div>
      <div></div>
    </section>
    <section
      id="porto"
      class="flex flex-col items-center px-[49px] py-[32px] md:px-[88px] md:py-[64px] lg:px-[102px] lg:py-[64px]"
    >
      <div class="w-full h-full flex flex-col items-center gap-[24px]">
        <!-- Title -->
        <article
          class="border-b-[3px] border-60-3 w-fit px-[12px] font-semibold text-[22px] md:text-[35px]"
        >
          Portofolio Bangun
        </article>
        <article class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
<<<<<<< HEAD
          <NuxtImg
            loading="lazy"
=======
          <img
>>>>>>> 65306b518abd7764ee42d3d828ce751a831d08a2
            :src="item"
            alt="portofolio"
            v-for="item in items"
            :key="item"
            class="w-[360px] h-[270px] object-cover transition-all duration-300 ease-in-out hover:scale-105 hover:rounded-md hover:z-10"
          />
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
const items = [
  "/images/bangun/Bangun1.png",
  "/images/bangun/Bangun2.png",
  "/images/bangun/Bangun3.png",
  "/images/bangun/Bangun1.png",
];

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 5000);
});
</script>
