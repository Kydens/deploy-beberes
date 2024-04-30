<template>
  <nav
    class="bg-gradient-to-r from-white from-20% via-30-2 via-50% to-30-4 to-90% sticky top-0 left-0 right-0 z-50 shadow-[0_0_12px_0_rgba(0,0,0,0.3)]"
  >
    <div
      class="w-full h-fit flex items-center justify-between px-[32px] md:px-[49px] lg:px-[88px] xl:px-[102px]"
    >
      <!-- Logo -->
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <NuxtImg
          loading="lazy"
          src="/svg/Logo.svg"
          class="w-[75px] md:w-[100px]"
          alt="Logo PT. Beberes Rumah Sejahtera"
        />
        <div class="flex flex-col -space-y-[6px] justify-center">
          <span class="text-[18px] text-60-7 font-semibold md:text-[22px]"
            >Beberes
          </span>
          <span class="text-[18px] text-60-7 font-semibold md:text-[22px]"
            >Rumah
          </span>
          <span
            class="text-[18px] text-60-7 font-semibold font-edo md:text-[22px]"
            >Sejahtera
          </span>
        </div>
      </a>

      <!-- Navbar Menus  -->
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500-lg lg:hidden"
        aria-controls="navbar-default"
        aria-expanded="false"
        @click="isOpen = true"
      >
        <Icon
          name="mingcute:menu-fill"
          width="84"
          height="84"
          style="color: #2d754c"
        />
      </button>

      <USlideover
        v-model="isOpen"
        :ui="{
          overlay: {
            backgroud: 'bg-white-100/30 dark:bg-white-100/30',
          },
          background: 'bg-[#fffffa] dark:bg-[#fffffa]',
          width: ' max-w-[220px]',
        }"
      >
        <div class="p-4 flex-1 h-full">
          <ul class="font-medium flex flex-col py-4 text-right gap-[8px]">
            <li>
              <NuxtLink
                to="/"
                class="block py-2 px-3 text-[18px] md:text-[16px] xl:text-[18px] font-semibold border-b-2"
              >
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/tentang-kami"
                class="block py-2 px-3 text-[18px] md:text-[16px] xl:text-[18px] font-semibold border-b-2"
                >Tentang Kami
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/pelayanan-kami"
                class="block py-2 px-3 text-[18px] md:text-[16px] xl:text-[18px] font-semibold border-b-2"
              >
                Pelayanan Kami
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/artikel"
                class="block py-2 px-3 text-[18px] md:text-[16px] xl:text-[18px] font-semibold border-b-2"
              >
                Artikel
              </NuxtLink>
            </li>
          </ul>
        </div>
      </USlideover>

      <!-- Content -->
      <div class="hidden w-full lg:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100-lg md:flex-row lg:space-x-4 xl:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
        >
          <li>
            <NuxtLink
              to="/"
              class="block py-2 px-3 text-[18px] md:text-[16px] xl:text-[18px] md:border-0 md:p-0"
            >
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/tentang-kami"
              class="block py-2 px-3 text-[18px] md:text-[16px] xl:text-[18px] md:border-0 md:p-0"
              >Tentang Kami
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/pelayanan-kami"
              class="block py-2 px-3 text-[18px] md:text-[16px] xl:text-[18px] md:border-0 md:p-0"
            >
              Pelayanan Kami
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/artikel"
              class="block py-2 px-3 text-[18px] md:text-[16px] xl:text-[18px] md:border-0 md:p-0"
            >
              Artikel
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
// Setup OpenerSlider
const isOpen = ref(false);
</script>

<style scoped>
.router-link-active {
  border-bottom: 4px solid #4d9e70;
}
</style>
