<template>
  <nav class="fixed top-0 left-0 right-0  ease-in-out mx-auto p-4">
    <div class="flex items-center justify-between">
      <div class="flex-1">
        <img src="@/assets/logo.png" class="h-10" alt="" />
      </div>
      <img src="@/assets/hamburger.png" alt="" @click="toggle = !toggle" />
      <div
        class="fixed inset-0 bg-orange "
        :class="
          toggle
            ? 'transform translate-x-0 transition duration-300 ease-in-out'
            : 'transform translate-x-full transition duration-300 ease-in-out'
        "
      >
        <div class="text-center text-white p-10 flex flex-col">
          <div class="font-bold text-4xl mb-4" @click="toggle = !toggle">X</div>

          <ul class="flex flex-1 flex-col justify-between ">
            <li class="py-10">
              <router-link to="#Home">
                <span class="font-normal text-4xl ">Home</span>
              </router-link>
            </li>
            <li class="mb-10">
              <router-link to="#Home">
                <span class="font-normal text-4xl ">Services</span>
              </router-link>
            </li>
            <li class="mb-10">
              <router-link to="#Home">
                <span class="font-normal text-4xl ">About</span>
              </router-link>
            </li>
            <li class="mb-10">
              <router-link to="#Home">
                <span class="font-normal text-4xl">Portofolio</span>
              </router-link>
            </li>
            <li class="">
              <router-link to="#Home">
                <span class="font-normal text-4xl ">Contact</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      toggle: false,
    };
  },
  methods: {},
};
</script>

<style></style>
