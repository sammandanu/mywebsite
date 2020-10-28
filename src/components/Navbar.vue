<template>
  <nav
    class="fixed top-0 left-0 right-0 bg-dark-blue ease-in-out mx-auto p-4 z-30 "
  >
    <div class="flex items-center justify-between max-w-screen-xl mx-auto">
      <div class="flex-1 flex items-center ">
        <img src="@/assets/logo.png" class="h-10 mr-2" alt="" />
        <div class="flex-1 text-center md:text-left text-orange font-semibold">
          SAMMTHING
        </div>
      </div>
      <img
        src="@/assets/hamburger.png"
        alt=""
        @click="toggle = !toggle"
        class="md:hidden"
      />
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

          <ul
            class="flex flex-1 flex-col justify-between "
            @click="toggle = false"
          >
            <li class="py-10">
              <a href="#banner">
                <span class="font-normal text-4xl ">Home</span>
              </a>
            </li>
            <li class="mb-10">
              <a href="#services">
                <span class="font-normal text-4xl ">Services</span>
              </a>
            </li>
            <li class="mb-10">
              <a href="#about">
                <span class="font-normal text-4xl ">About</span>
              </a>
            </li>
            <li class="mb-10">
              <a href="#portofolio">
                <span class="font-normal text-4xl">Portofolio</span>
              </a>
            </li>
            <li class="">
              <a href="#engage">
                <span class="font-normal text-4xl ">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <ul class="md:flex flex-1 justify-between text-gray hidden">
        <li>
          <a @click="change('#banner')" class="hover:text-white" href="#banner"
            >Home</a
          >
        </li>
        <li>
          <a
            @click="change('#services')"
            class="hover:text-white"
            href="#services"
            >Services</a
          >
        </li>
        <li>
          <a @click="change('#about')" class="hover:text-white" href="#about"
            >About</a
          >
        </li>
        <li>
          <a
            @click="change('#portofolio')"
            class="hover:text-white"
            href="#portofolio"
            >Portofolio</a
          >
        </li>
        <li>
          <a @click="change('#engage')" class="hover:text-white" href="#engage"
            >Contact</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Navbar",
  computed: {
    ...mapState(["currentRoute"])
  },
  data() {
    return {
      toggle: false
    };
  },
  methods: {
    change(data) {
      this.$store.commit("changeRoute", data);
    }
  }
};
</script>

<style></style>
