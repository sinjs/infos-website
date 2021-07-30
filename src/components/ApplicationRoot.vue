<template>
  <div class="app-root"><slot /></div>
</template>

<style scoped>
.app-root {
  min-height: 100vh;
  max-width: 100vw;
  padding-bottom: 30px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
