<template>
  <div class="px-4 pb-20 bg-dark-gray pt-20" id="portofolio">
    <div class="max-w-screen-xl mx-auto">
      <h2 class="text-2xl text-center text-white mb-8">
        <span class="pb-1 border-b border-orange">Portofolio</span>
      </h2>
      <div class="mx-auto mb-8 text-center">
        <button
          @click.prevent="changePortofolio('all')"
          class="inline-block mr-4 px-4 py-2  rounded-md focus:outline-none"
          :class="
            type === 'all' ? 'bg-orange text-white' : 'bg-md-gray text-white'
          "
        >
          All
        </button>
        <button
          @click.prevent="changePortofolio('website')"
          class="inline-block mr-4 px-4 py-2 bg-orange text-white rounded-md focus:outline-none"
          :class="
            type === 'website'
              ? 'bg-orange text-white'
              : 'bg-md-gray text-white'
          "
        >
          Website
        </button>
        <button
          @click.prevent="changePortofolio('design')"
          class="inline-block px-4 py-2  rounded-md focus:outline-none"
          :class="
            type === 'design' ? 'bg-orange text-white' : 'bg-md-gray text-white'
          "
        >
          Design
        </button>
      </div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3" v-if="show">
        <div class="overflow-hidden" v-for="(por, index) in show" :key="index">
          <div class="w-full h-full">
            <a
              class=""
              :href="
                por.link
                  ? por.link
                  : 'https://www.instagram.com/samm.thing/?hl=id'
              "
            >
              <img
                :src="por.img"
                class="w-full h-full object-top object-cover rounded-md"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portofolio",
  data() {
    return {
      type: "all",
      portofolio: [
        {
          img: require("@/assets/portofolio/ig3.png"),
          link: null,
          type: "design",
        },
        {
          img: require("@/assets/portofolio/semesta.png"),
          link: "https://yogyasemesta.com/",
          type: "website",
        },
        {
          img: require("@/assets/portofolio/jelajah.png"),
          link: "https://beta.jelajah.live/",
          type: "website",
        },
        {
          img: require("@/assets/portofolio/ig1.png"),
          link: null,
          type: "design",
        },
        {
          img: require("@/assets/portofolio/scu.png"),
          link: "https://www.scu-perkisemarang.com/",
          type: "website",
        },
        {
          img: require("@/assets/portofolio/neuro.png"),
          link: "https://strongneurologi.com/",
          type: "website",
        },
        {
          img: require("@/assets/portofolio/ig2.png"),
          link: null,
          type: "design",
        },
        {
          img: require("@/assets/portofolio/p1.png"),
          link: "https://www.nabilatransport.com/",
          type: "website",
        },
        {
          img: require("@/assets/portofolio/p3.png"),
          link: "https://sammandanu.github.io/movienight/",
          type: "website",
        },
      ],
      show: null,
    };
  },
  mounted() {
    this.changePortofolio("all");
  },
  methods: {
    changePortofolio(data) {
      if (data === "all") {
        this.type = "all";
        this.show = this.portofolio;
      } else if (data === "website") {
        this.type = "website";
        this.show = this.portofolio.filter((res) => {
          return res.type === "website";
        });
      } else {
        this.type = "design";
        this.show = this.portofolio.filter((res) => {
          return res.type === "design";
        });
      }
    },
  },
};
</script>

<style></style>
