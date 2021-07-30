<template>
  <div
    class="
      card
      bg-gray-100
      rounded-lg
      bg-gray-800
      hover:shadow-xl
      p-5
      content-around
    "
    @click="openLink"
  >
    <div class="flex">
      <img :src="image" class="rounded-lg w-10 h-10" /><span
        class="font-bold ml-3 mt-2"
        >{{ text }}</span
      >
    </div>
    <p class="text-gray-400 mt-2">{{ desc }}</p>
    <p class="text-blue-300 mt-2">{{ getCardLink() }}</p>
  </div>
</template>

<style scoped>
.card {
  transform: rotate(0deg);
  transition: transform 0.2s ease-in-out;
}
.card:hover {
  transform: rotate(2deg);
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    link: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
      default: "/img/card-noimage.png",
    },
  },
  methods: {
    openLink() {
      window.open(this.link);
    },
    getCardLink() {
      const url = new URL(this.link);
      return `${url.hostname}${url.pathname == "/" ? "" : url.pathname}`;
    },
  },
});
</script>
