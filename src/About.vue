<template>
  <application-root class="pt-40 p-0 bg-gray-900 text-white">
    <page-header />
    <card-screen>
      <card
        desc="Professional lagging bot"
        link="https://amogus.org"
        text="Dyno"
        image="https://cdn.discordapp.com/avatars/155149108183695360/19a5ee4114b47195fcecc6646f2380b1.webp?size=128"
      />
      <card
        desc="'I LOST ALL MY MONEY AGAIN FUCK'"
        link="https://amogus.org"
        text="Dank memer"
        image="https://cdn.discordapp.com/avatars/270904126974590976/d60c6bd5971f06776ba96497117f7f58.webp?size=128"
      />
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
