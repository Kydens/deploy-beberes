<template>
  <div
    class="min-w-[160px] max-w-[250px] h-[90px] flex justify-center px-[14px] py-[7px] z-10"
  >
<<<<<<< HEAD
    <NuxtImg loading="lazy" :src="src" :alt="alt" />
=======
    <img loading="lazy" :src="src" :alt="alt" />
>>>>>>> 65306b518abd7764ee42d3d828ce751a831d08a2
  </div>
</template>

<script setup>
const props = defineProps({
  src: String,
  alt: String,
});
</script>
