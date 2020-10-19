<template>
  <div class="px-4 py-10 bg-dark-gray">
    <h2 class="text-2xl text-center  text-white mb-10">
      <span class="pb-1 border-b border-orange">Services</span>
    </h2>
    <div class="grid grid-cols-1 gap-3 text-white text-center">
      <div
        class="p-6 rounded-md bg-orange flex  flex-col"
        style="height:320px;"
      >
        <div class="mb-6">
          <img src="@/assets/ux_icon.png" class="mx-auto h-8" alt="" />
        </div>
        <h3 class="font-semibold text-2xl mb-6">User Experience (UX)</h3>
        <p class="text-sm">
          The process design I use to create products that provide meaningful
          and relevant experiences to users
        </p>
      </div>
      <div
        class="p-6 rounded-md bg-md-gray flex  flex-col"
        style="height:320px;"
      >
        <div class="mb-6">
          <img src="@/assets/ui_icon.png" class="mx-auto h-8" alt="" />
        </div>
        <h3 class="font-semibold text-2xl mb-6">User Interface (UI)</h3>
        <p class="text-sm">
          Design focus on anticipating what users might need to do and ensuring
          that the interface has elements that are easy to access, understand,
          and use to facilitate those actions.
        </p>
      </div>
      <div
        class="p-6 rounded-md bg-orange flex  flex-col"
        style="height:320px;"
      >
        <div class="mb-6">
          <img src="@/assets/fe_icon.png" class="mx-auto h-8" alt="" />
        </div>
        <h3 class="font-semibold text-2xl mb-6">Front-End Development</h3>
        <p class="text-sm">
          the practice of producing HTML, CSS and JavaScript for a Landing Page
          or Web Application.
        </p>
      </div>
      <div
        class="p-6 rounded-md bg-md-gray flex  flex-col"
        style="height:320px;"
      >
        <div class="mb-6">
          <img src="@/assets/full_icon.png" class="mx-auto h-8" alt="" />
        </div>
        <h3 class="font-semibold text-2xl mb-6">Full Stack Development)</h3>
        <p class="text-sm">
          Develop both client and server software. In addition to mastering HTML
          and CSS, I also knows how to Program a browser with Vue and Program a
          server with Node JS
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
};
</script>

<style></style>
