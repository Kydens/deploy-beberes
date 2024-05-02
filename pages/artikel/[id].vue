<template>
  <article
    class="bg-[#fffffa] px-[32px] py-[32px] w-full h-fit flex flex-col gap-[48px] lg:flex-row md:px-[102px] md:py-[64px]"
  >
    <section class="w-full h-full flex flex-col gap-[24px] lg:w-2/3">
      <!-- Title -->
      <article class="flex flex-col gap-[2px]">
        <div v-if="article" class="text-[22px] font-semibold md:text-[35px]">
          {{ article.title }}
        </div>
        <div class="flex w-fit h-fit gap-[32px]">
          <!-- Upload date -->
          <div class="tanggal flex items-center gap-[12px]">
            <Icon
              name="mdi:calendar-month"
              width="24"
              height="24"
              style="color: #4d9e70"
            />
            <p v-if="article">
              {{ article.created_at.match(/\d+-\d+-\d+/) }}
            </p>
          </div>

          <!-- Posted by -->
          <div class="tanggal flex items-center gap-[12px]">
            <Icon
              name="mdi:person"
              width="24"
              height="24"
              style="color: #4d9e70"
            />
            <p>Admin</p>
          </div>
        </div>
      </article>
      <img
        loading="lazy"
        v-if="article"
        :src="article.image"
        alt=""
        width="auto"
      />
      <div
        v-if="article"
        v-html="
          article.description.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, ' ')
        "
        class="w-full h-full text-wrap"
      />
    </section>
    <section class="w-full lg:w-1/3">
      <CardListArtikel />
    </section>
  </article>
</template>

<script setup>
let article = ref(null);
const { id } = useRoute().params;
const uriSlug = `${useRuntimeConfig().public.api_uri}/`;

onMounted(async () => {
  const { data } = await $fetch(uriSlug + id, {
    lazy: true,
    server: false,
  });

  article.value = data;
  console.log(data);
});
</script>
