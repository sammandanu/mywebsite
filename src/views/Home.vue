<template>
  <div class="">
    <Navbar />
    <Banner />
    <Services />
    <About />
    <Portofolio />
    <Engage />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Banner from "@/components/Banner.vue";
import Services from "@/components/Services.vue";
import About from "@/components/About.vue";
import Portofolio from "@/components/Portofolio.vue";
import Engage from "@/components/Engage.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Banner,
    Services,
    About,
    Portofolio,
    Engage,
    Footer,
  },
  mounted() {
    document.title = "Sammthing - UI/UX Designer And Developer";
  },
};
</script>
