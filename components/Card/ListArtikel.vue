<template>
  <div
    class="bg-white rounded-lg border-separator border-2 w-full h-fit p-4 gap-[52px]"
  >
    <h1 class="text-[36px] font-semibold">Artikel Lainnya</h1>
    <div
      v-for="article in articles"
      :key="article.id"
      class="border-b-4 border-60-6 py-[12px]"
    >
      <NuxtLink :to="`/artikel/${article.id}`">
        <h2 class="text-[18px] font-medium">{{ article.title }}</h2>
        <p class="text-[14px]">
          {{ article.created_at.match(/\d+-\d+-\d+/) }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
let articles = ref(null);
const uriSlug = `${useRuntimeConfig().public.api_uri}`;

onMounted(async () => {
  const { data } = await $fetch(uriSlug, {
    lazy: true,
    server: false,
  });

  articles.value = data;
  console.log(data);
});
</script>
