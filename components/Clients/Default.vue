<template>
  <div
    class="min-w-[160px] max-w-[250px] h-[90px] flex justify-center px-[14px] py-[7px] z-10"
  >
    <img loading="lazy" :src="src" :alt="alt" />
  </div>
</template>

<script setup>
const props = defineProps({
  src: String,
  alt: String,
});
</script>
