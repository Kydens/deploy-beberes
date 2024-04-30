<template>
  <section
    class="relative h-full w-full px-[49px] py-[32px] flex flex-col justify-center items-center gap-[24px] md:px-[88px] xl:py-[88px] lg:px-[102px]"
  >
    <!-- Title Clients -->
    <article
      class="w-full px-[12px] font-semibold text-[22px] md:text-[30px] lg:text-[35px] flex flex-col justify-start"
    >
      <div class="w-fit border-b-[3px] border-60-3 text-left">
        Pelanggan Kami
      </div>
    </article>

    <!-- Clients -->
    <article class="w-full h-full z-10 flex flex-wrap">
      <ClientsDefault
        src="/images/Firstasia.png"
        alt="PT. Firstasia Consultant"
      />
      <ClientsDefault
        src="/images/Sangati.png"
        alt="PT. Sangati Soerya Sejahtera"
      />
      <ClientsDefault
        src="/images/Jlantah.png"
        alt="PT. Sejahtera Karna Menggoreng"
      />
      <ClientsDefault
        src="/images/Optik.png"
        alt="PT. Optik Tunggal Sempurna"
      />
    </article>

    <NuxtImg
      loading="lazy"
      src="/images/bgClient.png"
      class="hidden lg:block absolute right-0 h-full bottom-0"
    />
  </section>
</template>
