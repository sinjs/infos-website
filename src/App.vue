<template>
  <application-root class="pt-40 p-0 bg-gray-900 text-white">
    <page-header />
    <card-screen>
      <card desc="Welcome to the sus" link="https://amogus.org" text="Sussy" />
      <card desc="Welcome to the sus" link="https://amogus.org" text="Sussy" />
      <card desc="Welcome to the sus" link="https://amogus.org" text="Sussy" />
      <card desc="Welcome to the sus" link="https://amogus.org" text="Sussy" />
      <card desc="Welcome to the sus" link="https://amogus.org" text="Sussy" />
      <card desc="Welcome to the sus" link="https://amogus.org" text="Sussy" />
    </card-screen>
  </application-root>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import ApplicationRoot from "./components/ApplicationRoot.vue";
import PageHeader from "./components/Header.vue";
import CardScreen from "./components/CardScreen.vue";
import Card from "./components/Card.vue";
import "/dist/sass/index.css";

interface State {
  message: string;
}

export default defineComponent({
  components: { ApplicationRoot, PageHeader, CardScreen, Card },
  setup() {
    const state = reactive({
      message: "Learn Vue",
    });
    return {
      state,
    };
  },
});
</script>
