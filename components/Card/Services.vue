<template>
  <div class="fokus-bidang w-[207px] h-fit xl:w-[250px]">
    <div class="w-fit h-fit relative -translate-x-1/2 left-1/2 top-[24px]">
<<<<<<< HEAD
      <NuxtImg
        loading="lazy"
        :src="images"
        alt=""
        width="75"
        class="md:h-[100px] md:w-[110px]"
      />
=======
      <img :src="images" alt="" width="75" class="md:h-[100px] md:w-[110px]" />
>>>>>>> 65306b518abd7764ee42d3d828ce751a831d08a2
    </div>
    <div
      :class="`container-card w-full h-[235px] px-[12px] pt-[27px] pb-[12px] ${styling} rounded-lg flex flex-col justify-between shadow-[0_0_8px_0_rgba(0,0,0,0.3)] md:pt-[36px] md:pb-[16px] hover:shadow-[0_2px_24px_0_rgba(45,117,76,0.5)] transition-all duration-300 ease-in-out hover:transition-all hover:duration-300 hover:ease-in-out`"
    >
      <div class="w-full h-fit">
        <div class="title font-semibold text-[22px]">
          {{ title }}
        </div>
        <p class="desc m-0 text-[14px] xl:text-[16px]">
          {{ desc }}
        </p>
      </div>
      <button
        class="text-[14px] bg-background w-full h-fit shadow-md py-[8px] rounded-full"
      >
        <NuxtLink :to="href" class="font-medium">Cek Pelayanan Kami</NuxtLink>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  images: String,
  title: String,
  desc: String,
  styling: String,
  href: String,
});
</script>
