<template>
  <section
    id="services"
    class="h-full w-full px-[49px] py-[32px] flex flex-col items-center gap-[48px] md:px-[60px] md:py-[120px]"
  >
    <!-- Title -->
    <article
      class="w-full px-[12px] font-semibold text-[22px] md:text-[30px] lg:text-[35px] flex justify-center"
    >
      <div class="w-fit border-b-[3px] border-60-3 text-center">
        Fokus dan Bidang Kami
      </div>
    </article>

    <!-- Card -->
    <article class="w-full h-fit flex justify-center">
      <div
        class="grid grid-cols-1 place-items-end justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-[32px] w-fit h-full"
      >
        <CardServices
          href="https://nyaman.online"
          images="/images/Nyaman.png"
          title="Nyaman Apps"
          desc="Penyediaan jasa konstruksi dan pemeliharaan secara digital melalui aplikasi Nyaman"
          styling="bg-30-5"
        />
        <CardServices
          href="/pelayanan-kami/design"
          images="/images/Design.png"
          title="Design"
          desc="Penyediaan jasa design konstruksi secara konvensional sesuai kebutuhan pengguna"
          styling="bg-60-3"
        />
        <CardServices
          href="/pelayanan-kami/bangun"
          images="/images/Bangun.png"
          title="Bangun"
          desc="Penyediaan jasa membangun renovasi secara konvensional atau offline"
          styling="bg-30-5"
        />
        <CardServices
          href="/pelayanan-kami/renovasi"
          images="/images/Renovasi.png"
          title="Renovasi"
          desc="Penyediaan jasa membangun konstruksi secara konvensional atau offline"
          styling="bg-60-3"
        />
      </div>
    </article>

    <button
      class="text-[14px] bg-60-5 w-fit h-fit shadow-md py-[12px] px-[16px] rounded-full hover:scale-105 hover:bg-60-6 duration-300 transition-all ease-in-out"
    >
      <NuxtLink
        to="/pelayanan-kami"
        class="font-medium text-[14px] md:text-[16px] lg-text-[18px] text-white"
        >Lihat Portofolio Kami <Icon name="mdi:arrow-right"
      /></NuxtLink>
    </button>
  </section>
</template>
