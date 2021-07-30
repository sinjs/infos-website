<template>
  <div class="text-center md:w-1/2 w-screen select-none">
    <a class="text-6xl font-semibold header-name">{{ state.name }}</a> <br />
    <a class="text-gray-500">{{ state.description }}</a> <br />
  </div>
  <header-image />
</template>

<style scoped>
.header-name {
  line-height: 150%;
}
</style>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Variables from "../variables";
import HeaderImage from "./HeaderImage.vue";

interface State {
  name: string;
  description: string;
}

export default defineComponent({
  components: { HeaderImage },
  name: "page-header",
  setup() {
    const state: State = reactive({
      name: Variables.name,
      description: Variables.description,
    });
    return { state };
  },
});
</script>
