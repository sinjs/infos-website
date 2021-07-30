<template>
  <div class="w-1/2 float-right hidden md:block">
    <img
      src="/img/me.png"
      style="border-radius: 20px"
      class="overflow-hidden w-64 mx-auto image"
    />
  </div>
</template>

<style scoped>
.image {
  transform: translateY(-60%);
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
