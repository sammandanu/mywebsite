<template>
  <div class="mx-auto max-w-screen-xl">
    <Navbar />
    <Banner />
    <Services />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Banner from "@/components/Banner.vue";
import Services from "@/components/Services.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Banner,
    Services,
  },
};
</script>
