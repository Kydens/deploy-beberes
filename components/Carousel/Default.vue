<template>
  <div class="w-full h-fit flex items-center justify-center">
    <div class="absolute z-10">
      <h5 class="text-center text-[11px] md:text-[21px]">
        We Are Professional
      </h5>
      <div
        class="flex flex-col items-center font-semibold text-[16px] md:text-[28px]"
      >
        <h4>One Stop For</h4>
        <h4>Living</h4>
      </div>
    </div>
    <UCarousel
      ref="carouselRef"
      v-slot="{ item }"
      :items="items"
      :ui="{ item: 'basis-full' }"
      class="overflow-hidden"
      indicators
    >
      <img
        loading="lazy"
        :src="item"
        class="w-full h-[250px] md:h-[588px] xl:h-[662px]"
        draggable="false"
      />
    </UCarousel>
  </div>
</template>
<script setup>
const items = ["/images/bg.png", "/images/bg.png", "/images/bg.png"];

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 5000);
});
</script>
