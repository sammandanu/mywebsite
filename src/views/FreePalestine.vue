<template>
  <div class="min-h-screen relative px-4">
    <Navbar />

    <div class="mt-[72px] max-w-screen-xl mx-auto py-20 ">
      <img
        src="@/assets/palestina/flag.png"
        style="filter: brightness(70%);height: 100px;"
        class=" mx-auto  w-auto mb-4"
        alt=""
      />
      <div class="text-white max-w-xl mx-auto text-center mb-6">
        <h1 class=" text-4xl font-bold mb-4 ">
          Free Free Palestine!
        </h1>
        <p class="opacity-75">
          Berikut produk / brand dari perusahaan Zionis atau perusahaan
          internasional yang mendukung perampasan hak-hak rakyat Palestina.
        </p>
      </div>
      <div class="mb-6">
        <div class="text-white opacity-75 mb-2">Search</div>

        <input
          type="text"
          class="px-4 py-2  rounded-md w-full focus:outline-none border border-orange"
          v-model="search"
          placeholder="ketik untuk mencari.."
        />
      </div>
      <div
        class="grid md:grid-cols-4 grid-cols-1 gap-4"
        v-if="filter && filter.length > 0"
      >
        <div
          class="bg-white p-4 rounded-md text-center"
          v-for="item in filter"
          :key="item.name"
        >
          <img :src="item.image" class="h-10 w-auto mx-auto mb-2" alt="" />
          <p class="text-xl font-semibold">{{ item.name }}</p>
        </div>
      </div>
      <div
        class="text-center text-white py-10"
        v-if="filter && filter.length === 0 && search"
      >
        Produk atau brand tidak ditemukan
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import items from "@/assets/json/data.json";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    Navbar,
  },
  data() {
    return {
      items: items,
      search: "",
    };
  },
  mounted() {
    document.title = `Free Free Palestine`;
  },
  computed: {
    filter() {
      if (this.search) {
        let data = this.items.filter((item) =>
          item.name.toLowerCase().includes(this.search.toLowerCase())
        );

        return data;
      } else return this.items;
    },
  },
};
</script>
