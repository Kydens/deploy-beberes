<template>
  <section
    id="faq"
    class="bg-[#fafafa] h-full w-full px-[49px] py-[32px] flex flex-col items-center gap-[24px] md:px-[88px] md:py-[120px] lg:px-[102px]"
  >
    <div class="grid gap-[24px] md:grid-cols-2">
      <div class="flex flex-col mb-6 gap-[24px] md:mb-0">
        <div class="w-fit border-b-[3px] border-60-3">
          <h2 class="text-[22px] md:text-[30px] lg:text-[35px] font-semibold">
            Frequently Asked Questions (FAQ)
          </h2>
        </div>

        <p class="text-[16px]">
          Tidak menemukan jawaban di FAQ?
          <NuxtLink
            to="https://wa.me/6282113177686/?text=Hai,%20ada%20yang%20ingin%20saya%20tanyakan%20nih"
            target="_blank"
            class="text-[16px] font-semibold text-60-6 hover:underline"
          >
            Hubungi tim kami
          </NuxtLink>
        </p>
      </div>

      <div
        class="bg-gradient-to-br from-white from-10% via-60-1 via-40% to-60-3 to-80% h-[400px] overflow-y-scroll p-6 mb-6 md:mb-0 rounded-md shadow-[0_0_12px_0_rgba(0,0,0,0.3)] scrollbar-webkit"
      >
        <p class="mb-4 font-bold">Anim pariatur cliche reprehenderit?</p>
        <p class="mb-12">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt autem
          numquam dolore molestias aperiam culpa alias veritatis architecto eos,
          molestiae vitae ex eligendi libero eveniet dolorem, doloremque rem
          aliquid perferendis.
        </p>

        <p class="mb-4 font-bold">Non cupidatat skateboard dolor brunch?</p>
        <p class="mb-12">
          Distinctio corporis, iure facere ducimus quos consectetur ipsa ut
          magnam autem doloremque ex! Id, sequi. Voluptatum magnam sed fugit
          iusto minus et suscipit? Minima sunt at nulla tenetur, numquam unde
          quod modi magnam ab deserunt ipsam sint aliquid dolores libero
          repellendus cupiditate mollitia quidem dolorem odit
        </p>

        <p class="mb-4 font-bold">
          Praesentium voluptatibus temporibus consequatur non aspernatur?
        </p>
        <p class="mb-12">
          Minima sunt at nulla tenetur, numquam unde quod modi magnam ab
          deserunt ipsam sint aliquid dolores libero repellendus cupiditate
          mollitia quidem dolorem.
        </p>
      </div>
    </div>
  </section>
</template>
