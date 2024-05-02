<template>
  <footer id="footer" class="bg-30-1">
    <div
      class="mx-auto w-full max-w-screen-xl h-full p-[32px] lg:py-[48px] lg:px-[102px]"
    >
      <div class="md:flex md:justify-between">
        <div class="flex flex-col mb-6 md:mb-0 gap-[24px]">
          <div class="alamat w-full md:w-[325px] h-fit flex flex-col gap-2">
            <NuxtLink to="/" class="flex flex-col rtl:space-x-reverse">
              <img
                loading="lazy"
                src="/svg/Logo.svg"
                class="w-[64px] lg:w-[91px]"
                alt="Logo PT. Beberes Rumah Sejahtera"
              />
              <h3 class="font-semibold text-[18px] text-60-7">
                PT. Beberes Rumah Sejahtera
              </h3>
            </NuxtLink>
            <div class="text-[16px] md:text-[18px] text-10-text">
              <p>Jl. Ir. Hj. Juanda 3 No. 8 Jakarta Pusat, 10120 DKI Jakarta</p>
              <p>081377787378</p>
            </div>
            <div class="md:text-[18px] text-10-text">
              <p class="font-semibold text-[18px]">Jam Operasional :</p>
              <p class="text-[16px]">09.00 WIB - 18.00 WIB</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-8 sm:gap-6 sm:flex-row">
          <div>
            <h2 class="mb-6 text-[18px] font-semibold text-10-text">
              Tautan Lainnya
            </h2>
            <ul class="text-10-text">
              <li class="mb-4">
                <NuxtLink
                  to="/artikel"
                  class="hover:pl-2 hover:text-60-7 duration-500 ease-in-out transition-all"
                >
                  Artikel
                </NuxtLink>
              </li>
              <li class="mb-4">
                <NuxtLink
                  to="/#faq"
                  class="text-10-text hover:pl-2 hover:text-60-7 duration-500 ease-in-out transition-all"
                >
                  Bantuan
                </NuxtLink>
              </li>
              <li class="mb-4">
                <NuxtLink
                  to="/"
                  class="hover:pl-2 hover:text-60-7 duration-500 ease-in-out transition-all"
                >
                  Kebijakan Privasi
                </NuxtLink>
              </li>
              <li class="mb-4">
                <NuxtLink
                  to="https://nyaman.online"
                  class="hover:pl-2 hover:text-60-7 duration-500 ease-in-out transition-all"
                >
                  Nyaman
                </NuxtLink>
              </li>
              <li class="mb-4">
                <NuxtLink
                  to="/pelayanan-kami"
                  class="hover:text-60-7 duration-500 ease-in-out transition-all"
                >
                  Design, Bangun & Renovasi
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="w-fit">
            <h2 class="mb-6 text-[18px] font-semibold text-10-text">
              Ikuti Media Sosial Kami
            </h2>
            <ul
              class="text-10-text flex flex-row w-fit gap-2 items-center justify-center"
            >
              <li class="mb-2 w-fit">
                <NuxtLink to="https://www.facebook.com">
                  <img
                    loading="lazy"
                    src="/svg/Facebook.svg"
                    alt="Facebook beberes rumah"
                  />
                </NuxtLink>
              </li>
              <li class="mb-2 w-fit">
                <NuxtLink to="https://www.instagram.com/nyaman.online">
                  <img
                    loading="lazy"
                    src="/svg/Instagram.svg"
                    alt="Facebook beberes rumah"
                  />
                </NuxtLink>
              </li>
              <li class="mb-2 w-fit">
                <NuxtLink to="https://www.youtube.com/@Nyaman">
                  <Icon
                    name="mdi:youtube"
                    width="62"
                    height="62"
                    style="color: red"
                  />
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-60-3 sm:mx-auto lg:my-8" />
      <div
        class="flex items-center justify-center text-[10px] text-10-text md:text-[12px] font-semibold md:justify-start"
      >
        <span class=""
          >© 20xx
          <NuxtLink
            to="/"
            class="hover:text-60-7 duration-500 ease-in-out transition-all"
            >PT. Beberes Rumah Sejahtera</NuxtLink
          >. All Rights Reserved.
        </span>
      </div>
    </div>
  </footer>
</template>
