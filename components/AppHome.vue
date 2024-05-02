<template>
  <section
    class="relative h-full w-full flex flex-col items-center gap-[32px] px-[49px] md:px-[88px] xl:pr-[102px] lg:pr-[88px] lg:pl-0 py-[32px] md:py-[92px] lg:py-[150px] lg:flex-row lg:justify-between bg-[url('/images/bgHome.png')] bg-cover bg-center"
  >
    <!-- Images -->
    <article
      class="w-full h-[150px] md:h-[250px] lg:h-[60vh] flex flex-col lg:w-4/6 px-0"
    >
      <img
        loading="lazy"
        src="/images/bgAbout.jpg"
        alt="About Us"
        class="w-full h-full object-cover border-black rounded-md lg:rounded-r-3xl shadow-[0_2px_12px_0_rgba(0,0,0,0.25)]"
      />
    </article>

    <!-- Describes -->
    <article
      class="relative w-full lg:w-2/4 gap-[24px] flex flex-col justify-center"
    >
      <!-- Title -->
      <article class="flex w-full">
        <div
          class="border-b-[3px] border-60-3 w-fit px-[12px] font-semibold text-[22px] md:text-[35px]"
        >
          Siapakah Kami?
        </div>
      </article>
      <!-- About Us -->
      <div class="about p-4">
        <p class="text-justify text-[14px] md:text-[16px] xl:text-[18px]">
          <strong class="font-semibold">PT. Beberes Rumah Sejahtera</strong>
          adalah sebuah perusahaan penyedia platform digital aplikasi
          <strong class="font-semibold text-60-7">Nyaman</strong> untuk membantu
          pelanggan dalam hal pemenuhan tenaga ahli atau tukang profesional
          untuk design, bangun rumah atau kantor, renovasi, dan jasa
          pemeliharaan. Selain dengan aplikasi, kami menerima order secara
          konvensional atau offline.
        </p>
      </div>
      <!-- Button interaction -->
      <button
        class="text-[14px] bg-60-5 w-fit h-fit shadow-md py-[12px] px-[24px] rounded-full hover:scale-105 hover:bg-60-6 duration-300 transition-all ease-in-out"
      >
        <NuxtLink
          to="/tentang-kami"
          class="font-medium text-[14px] md:text-[16px] lg:text-[18px] text-white"
          >Tentang Kami...</NuxtLink
        >
      </button>
      <!-- Icon -->
      <div class="hidden xl:block absolute -right-4 -bottom-4 z-20">
        <img src="/svg/maskot1.svg" alt="maskot" loading="lazy" />
      </div>
    </article>

    <!-- Info -->
    <div
      class="hidden lg:block absolute -top-[50px] left-0 bg-30-4 w-4/6 h-[150px] rounded-r-full"
    >
      <div class="w-full h-full flex items-center px-[48px] gap-[32px]">
        <div class="w-[200px] text-[24px] font-bold">
          Hubungi Kami Lebih Lanjut
        </div>
        <div class="flex gap-[24px]">
          <div class="flex flex-col gap-[8px]">
            <!-- email -->
            <div class="flex flex-row items-center gap-[8px] max-w-[200px]">
              <Icon name="mdi:email" width="32" height="32" />
              <p class="font-semibold">email@email.com</p>
            </div>
            <!-- telp -->
            <div class="flex flex-row items-center gap-[8px] max-w-[300px]">
              <Icon name="mdi:call" width="32" height="32" />
              <p class="font-semibold">081377787378</p>
            </div>
          </div>
          <!-- alamat -->
          <div class="flex flex-row gap-[8px]">
            <Icon name="mdi:office-building-marker" width="48" height="48" />
            <div class="max-w-[200px]">
              <p class="font-semibold">
                Jl. Ir. Hj. Juanda 3 No. 8 Jakarta Pusat, 10120 DKI Jakarta
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
