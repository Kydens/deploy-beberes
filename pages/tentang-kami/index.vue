<template>
  <div class="tentang-kami">
    <section
      class="relative h-full w-full flex flex-col items-center gap-[32px] px-[49px] md:px-[88px] xl:pr-[102px] lg:pr-[88px] lg:pl-0 py-[32px] md:py-[88px] lg:py-[120px] lg:flex-row lg:justify-between bg-[url('/images/bgHome.png')] bg-cover bg-center"
    >
      <!-- Images -->
      <article
        class="w-full h-[150px] md:h-[250px] lg:h-[60vh] flex flex-col lg:w-4/6 px-0"
      >
        <NuxtImg
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
            <strong class="font-semibold text-60-7">Nyaman</strong> untuk
            membantu pelanggan dalam hal pemenuhan tenaga ahli atau tukang
            profesional untuk design, bangun rumah atau kantor, renovasi, dan
            jasa pemeliharaan. Selain dengan aplikasi, kami menerima order
            secara konvensional atau offline.
          </p>
        </div>
      </article>
    </section>

    <section class="bg-[url('/images/bgHorizontal.jpg')] bg-cover bg-center">
      <div
        class="bg-black/70 w-full h-full px-[32px] py-[24px] flex flex-col gap-[12px] md:flex-row"
      >
        <!-- Text1 -->
        <article
          class="backdrop:blur-lg bg-white/30 gap-[12px] w-full md:max-w-[500px] h-full md:h-[320px] px-[32px] py-[16px] md:py-[48px] flex flex-col items-center rounded-lg shadow-[0_0_6px_0_rgba(0,0,0,0.5)]"
        >
          <Icon
            name="mdi:worker"
            width="64"
            height="64"
            class="md:w-[84px] md:h-[84px]"
            style="color: #ffd93b; stroke: #143047"
          />
          <div class="w-full flex flex-col gap-[4px]">
            <h3
              class="text-[16px] text-center text-white font-semibold lg:text-[18px] xl:text-[21px]"
            >
              Tenaga Handal dan Profesional
            </h3>
            <p class="text-[14px] lg:text-[14px] xl:text-[16px] text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              cupiditate.
            </p>
          </div>
        </article>

        <!-- Text2 -->
        <article
          class="backdrop:blur-lg bg-white/30 gap-[12px] w-full md:max-w-[500px] h-full md:h-[320px] px-[32px] py-[16px] md:py-[48px] flex flex-col items-center rounded-lg shadow-[0_0_6px_0_rgba(0,0,0,0.5)]"
        >
          <Icon
            name="bxs:building"
            width="64"
            height="64"
            class="md:w-[84px] md:h-[84px]"
            style="color: #ffd93b; stroke: #143047"
          />
          <div class="w-full flex flex-col gap-[4px]">
            <h3
              class="text-[16px] text-center text-white font-semibold lg:text-[18px] xl:text-[21px]"
            >
              Pekerjaan yang Berkualitas
            </h3>
            <p class="text-[14px] lg:text-[14px] xl:text-[16px] text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              cupiditate.
            </p>
          </div>
        </article>

        <!-- Text3 -->
        <article
          class="backdrop:blur-lg bg-white/30 gap-[12px] w-full md:max-w-[500px] h-full md:h-[320px] px-[32px] py-[16px] md:py-[48px] flex flex-col items-center rounded-lg shadow-[0_0_6px_0_rgba(0,0,0,0.5)]"
        >
          <Icon
            name="ri:customer-service-2-fill"
            width="64"
            height="64"
            class="md:w-[84px] md:h-[84px]"
            style="color: #ffd93b; stroke: #143047"
          />
          <div class="w-full flex flex-col gap-[4px]">
            <h3
              class="text-[16px] text-center text-white font-semibold lg:text-[18px] xl:text-[21px]"
            >
              Customer Service Fast Respond
            </h3>
            <p class="text-[14px] lg:text-[14px] xl:text-[16px] text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              cupiditate.
            </p>
          </div>
        </article>
      </div>
    </section>

    <section
      class="relative h-full w-full flex items-center gap-[32px] px-[49px] md:px-[88px] xl:px-[102px] py-[32px] md:py-[88px] lg:py-[120px] lg:flex-row"
    >
      <!-- Visi Misi -->
      <div class="visi-misi lg:w-1/2 flex flex-col gap-[12px] z-10">
        <!-- Visi -->
        <div class="visi">
          <div class="ballComponent h-fit">
            <!-- svg large -->
            <NuxtImg
              src="/svg/visiL.svg"
              alt="Visi"
              class="hidden md:block"
              loading="lazy"
            />
            <!-- svg small -->
            <NuxtImg
              src="/svg/visi.svg"
              alt="Visi"
              class="block md:hidden"
              loading="lazy"
            />
          </div>
          <div class="px-[8px]">
            <p class="text-[14px] md:text-[16px] xl:text-[18px] text-justify">
              Menjadi perusahaan "<i class="font-medium"
                >One Stop Solution For Your Living</i
              >" yang memenuhi kebutuhan pelanggan untuk jasa konstruksi dan
              pemeliharaan yang berkualitas dan terpercaya berbasis digital dan
              konvensional.
            </p>
          </div>
        </div>
        <!-- Misi -->
        <div class="misi">
          <div class="ballComponent h-fit">
            <!-- svg large -->
            <NuxtImg
              src="/svg/misiL.svg"
              alt="Misi"
              class="hidden md:block"
              loading="lazy"
            />
            <!-- svg small -->
            <NuxtImg
              src="/svg/misi.svg"
              alt="Misi"
              class="block md:hidden"
              loading="lazy"
            />
          </div>
          <div class="px-[24px]">
            <ul>
              <li class="list-disc decoration-60-6">
                <p class="text-[14px] md:text-[16px] xl:text-[18px]">
                  Menyediakan aplikasi yang dapat diakses dengan mudah dan real
                  time
                </p>
              </li>

              <li class="list-disc decoration-60-6">
                <p class="text-[14px] md:text-[16px] xl:text-[18px]">
                  Menyediakan tenaga profesional dan berpengalaman di bidangnya
                </p>
              </li>

              <li class="list-disc decoration-60-6">
                <p class="text-[14px] md:text-[16px] xl:text-[18px]">
                  Customer Service yang responsif dan solutif
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Images -->
      <article class="w-full h-fit hidden lg:flex flex-col lg:w-1/2 px-0 z-10">
        <NuxtImg
          loading="lazy"
          src="/images/bgVisi.jpg"
          alt="About Us"
          class="w-full object-cover hidden lg:block md:h-[250px] lg:h-[320px] xl:h-[410px] border-black rounded-xl shadow-[0_2px_12px_0_rgba(0,0,0,0.5)]"
        />
      </article>

      <div
        class="hidden lg:block absolute right-12 xl:right-14 bottom-12 bg-30-4 rounded-md w-[300px] h-[300px]"
      />
    </section>

    <section
      id="why"
      class="bg-[url('/images/bg.png')] bg-cover bg-center flex flex-col px-[32px] py-[32px] gap-[24px] md:gap-[48px] md:px-[88px] md:py-[120px] lg:px-[102px] items-center"
    >
      <!-- Title -->
      <article
        class="w-full px-[12px] font-semibold text-[22px] md:text-[30px] lg:text-[35px]"
      >
        <div class="w-fit border-b-[3px] border-60-3 text-center md:text-left">
          Kenapa Kami?
        </div>
      </article>

      <!-- Alur -->
      <div class="Alur">
        <NuxtImg
          src="/svg/Alur.svg"
          alt="alur"
          class="hidden md:block"
          loading="lazy"
        />
        <NuxtImg
          src="/svg/AlurM.svg"
          alt="alur"
          class="block md:hidden"
          loading="lazy"
        />
      </div>
    </section>
  </div>
</template>
