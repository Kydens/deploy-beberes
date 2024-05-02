<template>
  <article
    class="w-full h-full grid grid-cols-1 gap-4 m-4 md:grid-cols-2 lg:grid-cols-3"
  >
    <div
      v-for="article in articles"
      :key="article.id"
      class="flex flex-col w-full h-full shadow-md bg-white rounded-xl p-6 border-separator border-2"
    >
      <NuxtLink :to="`/artikel/${article.id}`" class="flex flex-col gap-[8px]">
        <div class="flex flex-col gap-[12px]">
          <img
            loading="lazy"
            :src="article.image"
            :alt="article.image"
            class="self-center"
          />
        </div>
        <div class="flex flex-col justify-end h-full w-full gap-[12px]">
          <h1
            class="mt-auto text-[16px] md:text-[16px] xl:text-[21px] font-semibold"
          >
            {{ article.title }}
          </h1>
          <p
            v-html="
              article.description.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '')
            "
            class="line-clamp-4 text-ellipsis h-full w-full"
          />
        </div>
      </NuxtLink>
    </div>
  </article>
</template>

<script setup>
const articles = ref(null);
const uri = useRuntimeConfig().public.api_uri;

onMounted(async () => {
  const { data } = await $fetch(uri, {
    lazy: true,
    server: false,
  });

  articles.value = data;
  console.log(data);
});
</script>
