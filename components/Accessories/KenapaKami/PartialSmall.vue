<template>
  <div class="flex w-fit h-full items-center">
    <div
      class="w-[60px] h-[60px] sm:w-[120px] sm:h-[120px] bg-60-6 text-white rounded-[50%] flex items-center justify-center z-30 shadow-[0_0_6px_0_rgba(0,0,0,0.3)] relative left-4"
    >
      <p class="text-[24px] sm:text-[36px] font-semibold">{{ number }}</p>
    </div>
    <div
      class="bg-30-5 w-[300px] sm:w-[450px] h-[50px] sm:h-[100px] px-12 py-[16px] rounded-r-full flex items-center shadow-[0_0_12px_0_rgba(0,0,0,0.3)] z-20 relative right-4"
    >
      <p class="text-[12px] sm:text-[21px] font-semibold">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
  number: String,
});
</script>
