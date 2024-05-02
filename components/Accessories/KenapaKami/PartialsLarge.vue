<template>
  <div class="flex w-fit h-full items-center">
    <div
      class="md:w-[120px] xl:w-[150px] md:h-[120px] xl:h-[150px] bg-60-6 text-white text-[45px] xl:text-[56px] rounded-[50%] flex items-center justify-center z-30 shadow-[0_0_6px_0_rgba(0,0,0,0.3)]"
    >
      {{ number }}
    </div>
    <div
      class="relative -left-12 bg-30-5 lg:w-[500px] xl:w-[620px] lg:h-[100px] xl:h-[120px] px-[80px] py-[16px] rounded-r-full flex items-center shadow-[0_0_12px_0_rgba(0,0,0,0.3)] z-20"
    >
      <p class="lg:text-[16px] xl:text-[21px] font-semibold">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
  number: String,
});
</script>
