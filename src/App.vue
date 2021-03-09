<template>
  <div id="app">
    <router-transition>
      <router-view />
    </router-transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import RouterTransition from "@/components/routerTransition/index.vue";

@Component({
  name: "App",
  components: {
    RouterTransition,
  }
})
export default class App extends Vue {

}
</script>