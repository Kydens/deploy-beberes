<template>
  <div class="relative pt-4 flex">
    <NuxtImg src="/svg/ballComponent.svg" class="w-[48px] md:w-[64px]" />
    <h4
      class="text-[28px] md:text-[30px] font-semibold absolute z-10 -bottom-2 left-10"
    >
      <slot />
    </h4>
  </div>
</template>
