<template>
  <div class="px-4 py-20 max-w-screen-sm mx-auto">
    <div class="mb-8">
      <img src="@/assets/logo.png" class="h-10 mx-auto" alt="" />
    </div>
    <div class="text-center text-gray text-sm mb-8 md:hidden">
      <div class="grid grid-cols-3 gap-2 mb-4">
        <a href="#banner" class="">Home</a>
        <a href="#services" class="">Services</a>
        <a href="#about" class="">About</a>
      </div>
      <div class="flex">
        <a href="#portofolio" class="flex-1">Portofolio</a>
        <a href="#engage" class="flex-1">Contact</a>
      </div>
    </div>
    <div class="hidden text-center text-gray text-sm mb-8 md:block">
      <div class="grid grid-cols-5 gap-1 mb-4">
        <a href="#banner" class="">Home</a>
        <a href="#services" class="">Services</a>
        <a href="#about" class="">About</a>
        <a href="#portofolio" class="">Portofolio</a>
        <a href="#engage" class="">Contact</a>
      </div>
    </div>
    <div class="grid grid-cols-4 px-6 md:px-0 mx-auto mb-8 md:max-w-xs">
      <a
        :href="
          'https://api.whatsapp.com/send?phone=6282221940237&text=' +
            'Hello Danu'.split(' ').join('%20')
        "
        target="_blank"
      >
        <img src="@/assets/wa_icon.png" class="h-6 mx-auto" alt="" />
      </a>
      <a href="https://www.instagram.com/samm.thing/" target="_blank">
        <img src="@/assets/ig_icon.png" class="h-6 mx-auto" alt="" />
      </a>
      <a
        href="https://www.linkedin.com/in/muhammad-samman-almadanu-78a84a13a/"
        target="_blank"
      >
        <img src="@/assets/in_icon.png" class="h-6 mx-auto" alt="" />
      </a>
      <a href="https://github.com/sammandanu" target="_blank">
        <img src="@/assets/git_icon.png" class="h-6 mx-auto" alt="" />
      </a>
    </div>
    <div class="text-xs text-center text-gray">
      © 2020 Sammthing. All rights Reserved.
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style></style>
