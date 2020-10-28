<template>
  <div class="px-4 pb-20 bg-orange text-center text-white pt-20 " id="engage">
    <div class="max-w-screen-lg mx-auto md:flex">
      <div class="md:flex-1">
        <h2
          class="text-lg font-semibold sm:text-2xl md:text-4xl md:text-left  mb-4"
        >
          <span class="pb-1 border-b border-orange"
            >Want to colaborate with me ?</span
          >
        </h2>
        <p class="mb-4 md:text-left">
          Turn your idea into awesome website, just give me a shot and i will
          never let you down
        </p>
      </div>

      <div class="grid grid-col-1 gap-2">
        <div class="w-40 mx-auto">
          <a
            :href="
              'https://api.whatsapp.com/send?phone=6282221940237&text=' +
                'Hello Danu'.split(' ').join('%20')
            "
            target="_blank"
            class="block w-full p-4 bg-white text-orange border border-orange rounded-md"
          >
            Contact Me
          </a>
        </div>
        <div class="w-40 mx-auto">
          <a
            href="https://www.instagram.com/samm.thing/"
            target="_blank"
            class="block w-full p-4 bg-none text-white border border-white rounded-md"
          >
            Visit Me
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Engage"
};
</script>

<style></style>
