<template>
  <div class="min-h-screen h-auto flex flex-col pt-20 px-4 pb-20" id="banner">
    <div class="">
      <img src="@/assets/hero.png" class="w-4/5 mx-auto" alt="" />
    </div>
    <div class="flex-1 text-center text-white mt-16">
      <h1 class=" text-4xl font-light">
        I'm <span class="text-orange font-medium">Developer</span>
      </h1>
      <h2 class="mb-2">Muhammad Samman Almadanu</h2>
      <p class="text-gray text-sm">
        Freelance Web & Mobile UI/UX Designer and Developer
      </p>
      <div class="flex justify-center items-center mt-10">
        <a
          href=""
          class="block px-4 py-2 bg-orange rounded-md mr-10 font-medium"
          >Let's Talk</a
        >
        <button class="pb-1 border-b border-orange text-orange">My Work</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style></style>
