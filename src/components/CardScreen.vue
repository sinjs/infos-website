<template>
  <div class="px-20 w-screen list">
    <slot />
  </div>
</template>

<style scoped>
.list {
  display: grid;
  margin: auto;
  padding-left: 8%;
  padding-right: 8%;
  grid-template-columns: repeat(auto-fit, 320px);
  grid-gap: 30px;
  justify-content: center;
}

@media only screen and (max-width: 600px) {
  .list {
    grid-gap: 30px;
    padding-left: 0px;
    padding-right: 0px;
    margin-top: 220px;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
