<template>
  <div class="bg-[#fffffa] h-full w-full">
    <section class="px-[32px] py-[32px] w-full h-fit gap-[24px] lg:px-[102px]">
      <!-- Title -->
      <article
        class="w-full px-[12px] font-semibold text-[22px] md:text-[30px] lg:text-[35px] flex justify-start"
      >
        <div class="w-fit border-b-[3px] border-60-3 text-left">
          Artikel dan Tips
        </div>
      </article>

      <!-- Card -->
      <CardArtikel />
    </section>
  </div>
</template>

<script setup>
let articles = ref(null);
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
