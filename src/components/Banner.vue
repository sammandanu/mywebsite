<template>
  <div
    class="min-h-screen items-center flex flex-col md:flex-row pt-20 px-4 pb-20 md:pb-0 md:min-h-0 max-w-screen-xl mx-auto"
    id="banner"
    ref="banner"
  >
    <div class="md:flex-1 md:order-2 relative cek">
      <img src="@/assets/hero.png" class="w-4/5 mx-auto relative z-20" alt="" />
    </div>
    <div
      class="flex-1 text-center text-white mt-16 md:mt-0 md:text-left md:order-1"
    >
      <h1 class=" text-4xl md:text-6xl font-light">
        I'm <span class="text-orange font-medium">Developer</span>
      </h1>
      <h2 class="mb-2 md:text-xl">Muhammad Samman Almadanu</h2>
      <p class="text-gray text-sm md:text-xl">
        Freelance Web & Mobile UI/UX Designer and Developer
      </p>
      <div class="flex justify-center md:justify-start items-center mt-10">
        <a
          :href="
            'https://api.whatsapp.com/send?phone=6282221940237&text=' +
              'Hello Danu'.split(' ').join('%20')
          "
          target="_blank"
          class="block px-4 py-2 bg-orange rounded-md mr-10 font-medium"
          >Let's Talk</a
        >
        <a class="pb-1 border-b border-orange text-orange" href="#portofolio"
          >My Work</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner"
};
</script>

<style>
/* prettier-ignore */
.cek {
  z-index: 10;
}
.cek::after {
  content: "";
  position: absolute;
  width: 200px;
  height: 200px;
  top: 30px;
  left: 60px;
  background-image: url("~@/assets/bg.png");
  background-size: cover;
}
</style>
