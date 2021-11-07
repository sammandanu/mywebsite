<template>
  <div
    class="px-4 pb-20 pt-20 max-w-screen-lg mx-auto md:grid md:grid-cols-5 md:items-center md:gap-6"
    id="about"
  >
    <div class="w-2/3 mx-auto md:w-full md:col-span-2 md:mb-0">
      <div class="p-4 mb-8 md:mb-0 rounded-md border border-orange">
        <img
          src="@/assets/about.png"
          class="rounded-md block md:w-full"
          alt=""
        />
      </div>
    </div>
    <div class="md:col-span-3">
      <h2 class="text-2xl text-center md:text-left text-white mb-8">
        <span class="pb-1 border-b border-orange">About</span>
      </h2>
      <p class="text-gray text-sm md:text-lg text-center md:text-left mb-4">
        Hi, My name is Muhammad Samman Almadanu, I am
        {{ date.getFullYear() - 1997 }} years old, you can call me Danu. I have
        more than {{ date.getFullYear() - 2018 }} years of experience in this
        field. I love to learn and developing myself for a better me. For my web
        project, I use Vue, Nuxt, Strapi and Laravel. <br /><br />Yes I do Full
        Stack!
      </p>
      <div class="flex items-center justify-center md:justify-start text-white">
        <a
          :href="
            'https://api.whatsapp.com/send?phone=6282221940237&text=' +
            'Hello Danu'.split(' ').join('%20')
          "
          target="_blank"
          class="px-4 py-2 bg-orange rounded-md font-medium"
          >Let's Talk</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      date: new Date(),
    };
  },
};
</script>

<style></style>
