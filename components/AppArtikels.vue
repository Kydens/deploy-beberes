<template>
  <section
    id="artikel"
    class="bg-[#fffffa] h-full w-full px-[49px] py-[32px] flex flex-col items-center gap-[24px] md:px-[88px] md:py-[120px] lg:px-[102px] shadow-lg"
  >
    <!-- Title -->
    <article class="w-full px-[12px] flex">
      <div
        class="w-fit font-semibold text-[22px] md:text-[30px] lg:text-[35px] border-b-[3px] border-60-3 text-left"
      >
        Artikel dan Tips
      </div>
    </article>

    <!-- Card -->
    <CardArtikel />

    <!-- Button interaction -->
    <button
      class="text-[14px] bg-60-5 w-fit h-fit shadow-md py-[12px] px-[16px] rounded-full hover:scale-105 hover:bg-60-6 duration-300 transition-all ease-in-out"
    >
      <NuxtLink
        to="/artikel"
        class="font-medium text-[14px] md:text-[16px] lg-text-[18px] text-white"
        >Lihat Semua <Icon name="mdi:arrow-right"
      /></NuxtLink>
    </button>
  </section>
</template>
